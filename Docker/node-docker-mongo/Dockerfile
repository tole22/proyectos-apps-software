FROM node:14

# crear carpeta donde va a estar mi codigo
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# copiar el directorio actual dentro del container
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]