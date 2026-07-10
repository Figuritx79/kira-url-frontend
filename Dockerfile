FROM node:26-alpine

WORKDIR /app


RUN pnpm install

EXPOSE 9122
