FROM node:12.18.3-alpine3.12 as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["yarn", "start"]