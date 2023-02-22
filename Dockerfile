FROM node:alpine

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY ./src/ /app/src
COPY ./.env /app/.env


EXPOSE 3000

CMD [ "npm", "start" ]