import { build } from 'vite';
import { getLibViteConfig } from './getLibViteConfig';

export interface BuildReactLibOptions {
  watch: boolean;
}

export async function buildReactLib({ watch }: BuildReactLibOptions) {
  const config = await getLibViteConfig(watch);
  await build({
    ...config,
    configFile: false,
  });
}
