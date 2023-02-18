FROM node:alpine

COPY package.json .
RUN npm install

WORKDIR /app
COPY . /app

EXPOSE 3000

CMD [ "npm", "start" ]