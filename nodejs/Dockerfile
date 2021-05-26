FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .


CMD [ "node","server.js" ]
























#docker run -dp 8080:8080 nodeserver
#docker run -dp 8080:8080 nodeserver node server.js



#nodeentrypoint
#ENTRYPOINT [ "node" ]
#docker run -dp 8080:8080 nodeentrypoint
#docker run -dp 8080:8080 nodeentrypoint server.js

#nodecmd
#ENTRYPOINT [ "node" ]
#CMD [ "server.js" ]
#docker run -dp 8080:8080  nodecmd -v 
#docker run -dp 8080:8080  nodecmd
#docker run -dp 8080:8080  nodecmd server2.js