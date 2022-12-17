import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy {

  constructor(public dataService: DataService) { }

  mensaje: string = 'Mensaje!';

  nombreSubscription: Subscription;

  ngOnInit() {
    this.nombreSubscription = this.dataService.nombre$.subscribe(texto =>
      this.mensaje = texto
    );

    //this.dataService.nombre$.emit('Hijo!');
  }

  ngOnDestroy() {
    //this.nombreSubscription.unsubscribe();
  }

}
