##############################
## For production build ######
##############################

# STAGE 1 ####################
##############################
FROM node:18-alpine as BUILDER

ENV HOME=/home/app/
COPY --chown=node:node . $HOME
WORKDIR $HOME

RUN npm ci
RUN npx prisma generate
RUN sh ./scripts.sh build
RUN npm prune --production

# STAGE 2 ####################
##############################
FROM node:18-alpine

ENV HOME=/home/app/
WORKDIR $HOME

COPY --from=BUILDER --chown=node:node $HOME/build $HOME
COPY --from=BUILDER --chown=node:node $HOME/node_modules $HOME/node_modules

USER node
EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]

##############################
## Development Mode ##########
##############################
FROM node:18-slim as DEV

ENV HOME=/home/app/
EXPOSE 3000
RUN apt-get update -y && apt-get install -y openssl
RUN npx prisma generate
USER node
WORKDIR $HOME