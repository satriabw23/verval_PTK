FROM node:18-alpine3.14
LABEL maintainer="Bersama Teknologi Unggul"
WORKDIR /app
COPY . /app/

RUN apk add tzdata
RUN cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN date

RUN npm install --production
RUN npm install pm2 -g

EXPOSE 3000
CMD ["pm2-runtime","pm2-process.yml"]
