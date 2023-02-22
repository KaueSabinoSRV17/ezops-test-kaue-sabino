FROM node:alpine

WORKDIR /app

COPY package.json /app/
RUN npm install

ARG MONGO_USER
ARG MONGO_PASSWORD

ENV MONGO_USER $MONGO_USER
ENV MONGO_PASSWORD $MONGO_PASSWORD

COPY ./src/ /app/src
COPY ./.env /app/

EXPOSE 3000

CMD [ "npm", "start" ]