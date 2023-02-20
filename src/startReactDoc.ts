import { createServer } from 'vite';
import { getDocViteConfig } from './getDocViteConfig';

export async function startDocServer({ port = 3333 }) {
  const config = await getDocViteConfig();
  const server = await createServer({
    ...config,
    configFile: false,
    server: {
      host: true,
      port,
      open: true,
    },
  });
  await server.listen();

  server.printUrls();
}
