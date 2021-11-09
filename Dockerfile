FROM node:16-alpine3.14
WORKDIR /app
RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*
ADD package.json package.json
RUN yarn install
ADD . .
CMD ["yarn", "run"]