type EnvMap = Record<string, string | undefined>;

const viteEnv: EnvMap = (import.meta as ImportMeta & { env?: EnvMap }).env ?? {};
const processEnv: EnvMap =
  typeof globalThis !== 'undefined' &&
  (globalThis as { process?: { env?: EnvMap } }).process !== undefined
    ? (globalThis as { process?: { env?: EnvMap } }).process?.env ?? {}
    : {};

export function getEnv(key: string, fallback = ''): string {
  const raw = viteEnv[key] ?? processEnv[key] ?? fallback;
  return typeof raw === 'string' ? raw.trim() : fallback;
}
