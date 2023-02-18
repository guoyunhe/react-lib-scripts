import { createServer } from 'vite';
import { getDocViteConfig } from './getDocViteConfig';

export async function startDocServer({ port = 3333 }) {
  const server = await createServer({
    ...getDocViteConfig(),
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
