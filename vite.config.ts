import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import dotenv from 'dotenv';
import path from 'node:path';
import {defineConfig, loadEnv} from 'vite';

function normalizeBasePath(value?: string): string {
  if (!value) {
    return '';
  }

  let normalized = value.trim();
  try {
    normalized = decodeURIComponent(normalized);
  } catch {
    normalized = normalized.replace(/%22/gi, '"');
  }

  normalized = normalized.replace(/%22/gi, '"');

  if (normalized.startsWith('http://') || normalized.startsWith('https://')) {
    try {
      normalized = new URL(normalized).pathname;
    } catch {
      // ignore invalid URL values and continue with string sanitization
    }
  }

  normalized = normalized.replace(/^['"]+|['"]+$/g, '');

  if (!normalized) {
    return '';
  }

  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }

  if (!normalized.endsWith('/')) {
    normalized = `${normalized}/`;
  }

  return normalized;
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const secretBasePath = normalizeBasePath(process.env.VITE_BASE_PATH);
  const pagesBase =
    secretBasePath ||
    (process.env.GITHUB_ACTIONS === 'true' && repoName ? `/${repoName}/` : '/');
  const legacyEnvPath = path.resolve(__dirname, '.env.loacal');
  const legacyEnv = fs.existsSync(legacyEnvPath)
    ? dotenv.parse(fs.readFileSync(legacyEnvPath))
    : {};
  const mergedEnv = {...legacyEnv, ...env};

  const clientEnvDefines = Object.fromEntries(
    Object.entries(mergedEnv)
      .filter(([key]) => key.startsWith('VITE_'))
      .map(([key, value]) => [`import.meta.env.${key}`, JSON.stringify(value)]),
  );

  return {
    base: pagesBase,
    plugins: [react(), tailwindcss()],
    define: {
      ...clientEnvDefines,
      'process.env.GEMINI_API_KEY': JSON.stringify(mergedEnv.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
