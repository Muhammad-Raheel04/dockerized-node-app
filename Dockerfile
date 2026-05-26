FROM node:lts-alpine3.23

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 1234

CMD ["npm", "start"]


