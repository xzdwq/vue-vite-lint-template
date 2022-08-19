ARG NODE_VERSION=16-alpine

FROM node:${NODE_VERSION} as build-stage

WORKDIR /app
RUN corepack enable

COPY .npmrc package*.json ./
RUN --mount=type=cache,id=npm-store,target=/root/.npm-store \
    npm install --frozen-lockfile

COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY docker/production/nginx.conf /etc/nginx/

ENV PORT 4444

EXPOSE $PORT/tcp

CMD ["nginx", "-g", "daemon off;"]
