import react from '@vitejs/plugin-react-swc';
import { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { getPackageJson } from './getPackageJson';

export async function getDocViteConfig(): Promise<UserConfig> {
  const packageJson = await getPackageJson();
  return {
    base: './', // for GitHub pages
    build: {
      outDir: 'build',
    },
    define: {
      PACKAGE_NAME: `"${packageJson.name}"`,
      PACKAGE_VERSION: `"${packageJson.version}"`,
    },
    plugins: [react({ tsDecorators: true }), tsconfigPaths()],
  };
}
