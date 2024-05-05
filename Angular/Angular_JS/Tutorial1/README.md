#### Node
version: node v0.10.48

# miservidor
#### Node
version: node v0.10.48

## express-generator
Instalamos globalmente:
- npm i -g express-generator

con el comando:
- express miservidor
crea toda un estructura de un servidor express, con rutas, vistas, etc..

ejecutar servidor

- cd miservidor
- npm install
- npm start

localhost:3000

# MiProyecto
#### Node
version: node v0.10.48

## Grunt
Usamos para automatizar tareas y manejo de archivos dentro de nuestra app.
Depurar codigo.

Utilizamos las siguientes tareas de grunt:
- jshint : chequeo de errores de codigo, compílacion, etc.
- concat: unir archivos en uno solo
- uglify: para minimizar archivos js
- shell: para ejecutar comandos del SO, para mover, copiar y borrar archivos/carpetas.

Tener isntalado grunt-cli.
sino instalamos con: 
- npm i -g grunt-cli

el proyecto grunt lo tenemos en MiProyecto/
tirar un
- npm install --save-dev

Instalar grunt-init
- npm i -g grunt-init

Instalar grunt en nuestra carpeta del proyecto local:
- npm install grunt --save-dev

## Run grunt tasks (jshint, concat, uglify, .....)
Run in console with admin rigths (necesita permisos para crear carpetas)
- grunt
##### example:
$ grunt
Running "jshint:all" (jshint) task

   scripts.js
     21 |        console.log($scope.formVisibility)
                                                   ^ Missing semicolon.
     23 |};
          ^ Unnecessary semicolon.

>> 2 errors in 1 file
##### example2:
$ grunt
Running "jshint:all" (jshint) task
>> 1 file lint free.

Running "concat:dist" (concat) task

Running "uglify:dist" (uglify) task

Done, without errors.

# Yeoman
#### Node
Node version: 6.16.0

Instalar yeoman
- npm install -g yo@1.8.1

Instalar generador de yeoman para Angular JS
- npm install -g generator-angular

Creamos un scaffolding para angular-js con:
- mkdir tareas && cd tareas
- yo angular
- npm install && bower install
- grunt serve