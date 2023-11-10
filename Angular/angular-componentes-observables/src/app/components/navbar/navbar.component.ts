import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mensaje: string = 'Navbar!';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.nombre$.subscribe(
      texto => {
        this.mensaje = texto;
      }
    );
  }

}
