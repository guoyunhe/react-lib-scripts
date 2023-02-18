import react from '@vitejs/plugin-react-swc';
import { join } from 'path';
import { UserConfig } from 'vite';
import { getPackageJson } from './getPackageJson';

export async function getDocViteConfig(): Promise<UserConfig> {
  const packageJson = await getPackageJson();
  return {
    build: {
      outDir: join(process.cwd(), 'build'),
      emptyOutDir: true,
    },
    define: {
      PACKAGE_NAME: `"${packageJson.name}"`,
      PACKAGE_VERSION: `"${packageJson.version}"`,
    },
    plugins: [react({ tsDecorators: true })],
    root: join(process.cwd(), 'docs'),
  };
}
