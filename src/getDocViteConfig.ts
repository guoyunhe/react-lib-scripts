import doc from '@rive/doc-vite-plugin';
import { UserConfig } from 'vite';

export async function getDocViteConfig(): Promise<UserConfig> {
  return {
    base: './', // for GitHub pages
    build: {
      outDir: 'build',
    },
    plugins: [doc()],
  };
}
