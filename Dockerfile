
FROM node
COPY ./app /app
WORKDIR /app

run npm install 

EXPOSE 3000 8081
CMD ["node", "/app/server.js"]
