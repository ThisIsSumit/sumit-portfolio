type EnvMap = Record<string, string | undefined>;

const viteEnv: EnvMap = (import.meta as ImportMeta & { env?: EnvMap }).env ?? {};
const processEnv: EnvMap =
  typeof globalThis !== 'undefined' &&
  (globalThis as { process?: { env?: EnvMap } }).process !== undefined
    ? (globalThis as { process?: { env?: EnvMap } }).process?.env ?? {}
    : {};

function sanitizeEnvValue(value: string): string {
  let normalized = value.trim();

  try {
    normalized = decodeURIComponent(normalized);
  } catch {
    normalized = normalized.replace(/%22/gi, '"');
  }

  normalized = normalized.replace(/%22/gi, '"');
  normalized = normalized.replace(/^['"]+|['"]+$/g, '');
  return normalized.trim();
}

export function getEnv(key: string, fallback = ''): string {
  const raw = viteEnv[key] ?? processEnv[key] ?? fallback;
  return typeof raw === 'string' ? sanitizeEnvValue(raw) : fallback;
}
