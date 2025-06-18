FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install

COPY . .

EXPOSE 3000

CMD ["nest", "start", "--watch"]