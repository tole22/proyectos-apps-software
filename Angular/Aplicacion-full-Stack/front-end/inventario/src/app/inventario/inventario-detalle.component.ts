import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InventarioService } from './inventario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventarioValidator } from './inventario.validators';
import { Inventario } from './inventario';
import { trigger, state, style, transition, animate } from '../../../node_modules/@angular/animations';


@Component({
  selector: 'inventario-detalle',
  templateUrl: './inventario-detalle.component.html',
  providers: [InventarioService],
  animations: [
    trigger('enterState',[
      state('void',style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(300, style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class InventarioDetalleComponent implements OnInit {

  titulo = "";
  form: FormGroup;
  inventario: Inventario[];
  esEdicion = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InventarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (!id) {
      this.titulo = "Agregar un nuevo Registro";
      this.crearControlesNuevo();
      return;
    }

    this.titulo = "Edicion del Registro";
    this.crearControlesEditar();
    this.service.getInventario(id)
        .subscribe(
          rs => this.inventario = rs,
          er => console.log('Error: %s', er),
          () => {
            if (this.inventario.length > 0) {
              this.esEdicion = true;
              this.form.patchValue({
                id: this.inventario[0].id,
                producto: this.inventario[0].producto,
                existencia: this.inventario[0].existencia,
                precio: this.inventario[0].precio,
                proveedor: this.inventario[0].proveedor
              })
            }
          }
        )
    console.log(id);
  }

  crearControlesNuevo(){
    this.form = this.fb.group({
      id: ['', Validators.required, InventarioValidator.valorUnico(this.service)],
      producto: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      existencia: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required]
    })
  }

  crearControlesEditar(){
    this.form = this.fb.group({
      id: ['', Validators.required],
      producto: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      existencia: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required]
    })
  }

  guardarInventario(){
    if(this.esEdicion){
      this.updateInventario(this.form.value);
    } else {
      this.agregarInventario(this.form.value);
    }
  }

  agregarInventario(inventario: Inventario){
    this.service.addInventario(inventario)
      .subscribe(
        rt => console.log(rt),
        er => console.log(er),
        () => console.log('Terminado')
      );

  }

  updateInventario(inventario: Inventario){
    if (!inventario) return;
    this.service.putInventario(inventario)
      .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => this.goLista()
    );
  }

  goLista(){
    let link = ['/inventario/lista'];
    this.router.navigate(link);
  }

  limpiarFormulario(){
    this.form.reset();
  }

}
