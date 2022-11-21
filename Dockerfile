FROM node:14.18.2-alpine
RUN npm i -g @nestjs/cli@8
WORKDIR /api
CMD [ "npm", "run", "start:dev" ]