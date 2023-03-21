FROM node:lts-alpine as builder

WORKDIR /app

COPY . .

RUN yarn 

RUN yarn build

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/build ./build

RUN yarn global add serve

CMD ["serve", "-s", "build"]