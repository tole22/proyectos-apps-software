
# Dev loca
localhost:5000

# 1er forma de correr la app con docker
## create image
docker build -t hellonode .
## create container
docker run -p 4001:3000  hellonode 

# 2da forma de correr la app ocn docker-compose
## docker-compose
copia los archivos y genera el contenedor
docker-compose build

inicia los servicios creados por el build
docker-compose up

en cada cambio de codigo nuevo correr docker-compose

## Mejora para actualizar codigo en container
Se agrego al docker-compose el registro volumes, entonces todo cambio
en ese volumen se va a ver reflejado en ambos lados. (container y local)
El container corre con nodemon asi cada cambio en el local es capturado por nodemon
en el container ya si rebuildea la aplicacion.
cuando corro el up voy a ver el mensaje:
        exampleapp | [nodemon] to restart at any time, enter `rs`
        exampleapp | [nodemon] watching path(s): *.*
        exampleapp | [nodemon] watching extensions: js,mjs,json
        exampleapp | [nodemon] starting `node src/index.js`
        exampleapp | Server on port 3000


## Entrar a la consola bash del container
docker ps
- acá veo el nombre del container
docker exec -it exampleapp bash
- me abre una consola en /user/src/app
