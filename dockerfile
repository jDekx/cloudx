FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY src/index.js ./index.js

EXPOSE 8080
CMD [ "node", "index.js" ]

