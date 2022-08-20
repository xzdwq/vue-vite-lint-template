ARG NODE_VERSION=16-alpine

FROM node:${NODE_VERSION} as dev-stage

WORKDIR /app

COPY .npmrc package*.json ./
RUN npm install

COPY . .

EXPOSE 4445/tcp

CMD ["npm", "run", "dev"]
