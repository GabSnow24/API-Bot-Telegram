
FROM node:15-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install
COPY . . 
EXPOSE 3002

RUN npx prisma generate
CMD yarn dev
