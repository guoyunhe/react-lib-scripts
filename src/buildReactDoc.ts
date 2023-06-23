import { existsSync } from 'fs';
import { build } from 'vite';
import { getDocViteConfig } from './getDocViteConfig';

export async function buildReactDoc() {
  if (!existsSync('./index.html')) return;
  const config = await getDocViteConfig();
  await build({
    ...config,
    configFile: false,
  });
}
