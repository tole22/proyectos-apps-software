import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona.model';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  Personas: Persona[];

  constructor( private personaSvc: PersonaService) { }

  ngOnInit(): void {
    this.personaSvc.getPersonas().subscribe((res) => {
      this.Personas = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Persona)
        }
      })
    })
  }

  deleteRow = (persona) => this.personaSvc.deletePErsona(persona);

}
