import react from '@vitejs/plugin-react-swc';
import glob from 'fast-glob';
import { UserConfig } from 'vite';
import { getPackageJson } from './getPackageJson';

export async function getDocViteConfig(): Promise<UserConfig> {
  const entries = await glob('src/index.{js,jsx,ts,tsx}');
  const packageJson = await getPackageJson();
  return {
    build: {
      outDir: 'build',
    },
    define: {
      PACKAGE_NAME: `"${packageJson.name}"`,
      PACKAGE_VERSION: `"${packageJson.version}"`,
    },
    plugins: [react({ tsDecorators: true })],
    resolve: {
      alias: {
        [packageJson.name]: entries[0],
      },
    },
  };
}
