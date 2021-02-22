FROM node:alpine as build
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH

RUN yarn
RUN yarn build

CMD ["yarn", "start"]