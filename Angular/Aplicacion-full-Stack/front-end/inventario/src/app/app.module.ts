import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioListaComponent } from './inventario/inventario-lista.component';
import { InventarioDetalleComponent } from './inventario/inventario-detalle.component';
import { InventarioService } from './inventario/inventario.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    ContactosComponent,
    InventarioComponent,
    InventarioListaComponent,
    InventarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
