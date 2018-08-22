import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { InventarioService } from './inventario.service';
import { Inventario } from './inventario';
import { trigger, state, style, transition, animate } from '../../../node_modules/@angular/animations';

@Component({
  selector: 'inventario-lista',
  templateUrl: './inventario-lista.component.html',
  animations: [
    trigger('routeAnimation',[
      state('*',
         style({
            opacity: 1,
            transform: 'translateX(0)'
         })
      ),
      transition(':enter',[
         style({
            opacity: 0,
            transform: 'translateX(-100%)'
         }),
         animate('1s ease-in')
      ]),
      transition(':leave', [
         animate('1s ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
         }))
      ])
   ])
  ]
})
export class InventarioListaComponent implements OnInit {

  lista: Inventario[];

  constructor(
    private servicio: InventarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.servicio.getInventarios()
      .subscribe(
        rs => this.lista = rs,
        er => console.log(er),
        () => console.log(this.lista)

      )
  }
  Editar(item :Inventario){
    let link = ['/inventario/detalle', item.id];
    this.router.navigate(link);
  }

  Borrar(item :Inventario){
    if(!item) return;

    this.servicio.delInventario(item.id)
    .subscribe(
      rs => console.log(rs),
      er => console.log(er),
      () => {
        this.lista = this.lista.filter(h => h !== item)
      }
    )
  }
// this.lista.filter(h => h !== item)
}

