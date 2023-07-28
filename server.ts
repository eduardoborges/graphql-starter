require("reflect-metadata");

import createApp from "./src/app";
import createApollo from "./src/apollo";
import fastifyApollo from "@as-integrations/fastify";
import context from "./src/context";

(async () => {
  const app = await createApp();
  const apollo = await createApollo(app);

  await apollo.start();

  await app.register(fastifyApollo(apollo), {
    context,
  });

  await app.listen({
    port: 4000,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Listening on http://localhost:4000/graphql");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
})();