## Arrancar UI
Necesita node, para poder seguir desarrollando con sass, ya que utilizamos Gulp.
npm install

Podemos visualizar el index.html normalmente, o arrancarlo con el live-server de VSC.

## Este template html contiene:
        - menu arriba
        - font styles de goole fonts, work sans y lobster
        - flexbox styles para el contenido
        - SASS para estilos
        - Gulp para automatizar el manejo de los archivos de sass, compresion de archivos css

## Gulp
Guilpfile.js contiene como se configura gulp.
Compile scss files and receive new styles changes:
        gulp sass:watch

## Troubleshooting
 - gulp not found > npm i --global gulp
 - Gulp Error : watch task has to be a function
        in gulp 3.x versions we used gulp.watch as follow.
        gulp.watch('src/**/*.js', ['js']);

        But in gulp 4.x you need to pass the task name in a function as follow.
        gulp.watch('app/**/*.js', gulp.series('js'));


