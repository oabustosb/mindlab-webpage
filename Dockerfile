FROM node:14.15.1 as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build


FROM nginx:1.19.2-alpine as deploy

RUN apk --no-cache add bash=~5.0

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx
COPY --from=build /app/public ./html

ENTRYPOINT ["nginx", "-g", "daemon off;"]