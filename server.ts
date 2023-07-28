import 'reflect-metadata';

import createApollo from './src/apollo';
import createApp from './src/app';

(async () => {
  const app = await createApp();
  await createApollo(app);

  await app.listen({
    host: '0.0.0.0',
    port: 4000,
  }).then(() => {
    console.log('Listening on http://localhost:4000/graphql');
  }).catch((e) => {
    console.error(e);
    process.exit(1);
  });
})();
