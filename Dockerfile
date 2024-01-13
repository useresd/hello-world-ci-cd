FROM node:18.16.0-alpine3.19

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ];