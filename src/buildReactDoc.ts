import { build } from 'vite';
import { getDocViteConfig } from './getDocViteConfig';

export async function buildReactDoc() {
  const config = await getDocViteConfig();
  await build({
    ...config,
    configFile: false,
  });
}
