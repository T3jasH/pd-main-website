FROM node:14.17-alpine

RUN mkdir -p /home/pd-main-website/ && chown -R node:node /home/pd-main-website
WORKDIR /home/pd-main-website 
COPY --chown=node:node . .

USER node

RUN npm i
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]