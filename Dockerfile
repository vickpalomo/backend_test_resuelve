FROM node:10.20.1-alpine3.11

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run jsdoc && npm run apidoc

EXPOSE 3001

CMD ["npm", "run", "start:prod"]