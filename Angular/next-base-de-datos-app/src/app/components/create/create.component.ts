import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {

  public personaForm: FormGroup;

  constructor(
    public personaSvc: PersonaService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.personaForm = this.formBuilder.group({
      name: [''],
      lastname: [''],
      email: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.personaSvc.createPersona(this.personaForm.value)
    this.router.navigate( [''] )
  }

}
