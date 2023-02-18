import glob from 'fast-glob';
import { UserConfig } from 'vite';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import { getPackageJson } from './getPackageJson';

export async function getLibViteConfig(watch?: boolean): Promise<UserConfig> {
  const entries = await glob('src/index.{js,jsx,ts,tsx}');
  if (entries.length === 0) {
    throw new Error('Failed to find entry file: src/index.{js,jsx,ts,tsx}');
  }
  const packageJson = await getPackageJson();
  return {
    build: {
      outDir: 'dist',
      lib: {
        entry: entries[0],
        formats: ['cjs', 'es'],
      },
      watch: watch ? {} : null,
    },
    define: {
      PACKAGE_NAME: `"${packageJson.name}"`,
      PACKAGE_VERSION: `"${packageJson.version}"`,
    },
    plugins: [externalizeDeps()],
  };
}
