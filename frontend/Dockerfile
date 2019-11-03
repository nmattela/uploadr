FROM node as build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:alpine
EXPOSE 3000
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /app/build /usr/share/nginx/html