FROM node:lts-alpine as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/build ./build

RUN npm install -g serve

CMD ["serve", "-s", "build"]