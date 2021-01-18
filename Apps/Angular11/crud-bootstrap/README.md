# Crud Angular 11 Bootstrap + Firebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Descripcion

uso bootswatch, una libreria que usa bootstrap para crear más plantillas, botones, etc...

Bootstrap depende de las librebrias popper y jquery asi que tmb las instalo
+ jquery@3.5.1
+ bootswatch@4.5.3
+ bootstrap@4.5.3
+ @popperjs/core@2.6.0

## Comandos ng
#### Componentes
ng g c shared/components/employee-form --module app --skipTests
ng g c shared/components/header --module app --skipTests

#### Servicios
ng g s pages/employees/employees --skipTests

#### Modulos
ng g m shared/components/header --module app
ng g m shared/components/employee-form --module app
ng g m pages/employees/edit --module app --route edit
ng g m pages/employees/details --module app --route details
ng g m pages/employees/new --module app --route new

## Firebase
proyecto: crud-employee-angular11