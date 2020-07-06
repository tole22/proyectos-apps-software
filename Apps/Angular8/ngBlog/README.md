# Version used
Angular CLI: 8.3.26
Node: 10.16.1
OS: win32 x64
Angular: 8.2.14

# Firebase
estamos usando los modulos de autentication, database y storage de console.firebase.
appName: ngBlog
proyecto: ngBlog

Firebase-CLI
-npm install -g firebase-tools

login firebase locally:
    -firebase login --interactive

    -firebase logout


# NG GENERATE

`ng g module components/pages/home -m=app --route home`
generar un modulo en la carpeta component, crear home, indicar en que modulo lo queremos (app), indicamos que nos cree una ruta que se llame `home` ya que estamos generando un nuevo modulo.

`ng g c components/posts/new-post -m=app`
generar component en esa carpeta post, y va a estar en el modulo principal.

`ng g s components/posts/post --flat`
generar un servicio, flat para no crear nueva carpeta

# NgBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
