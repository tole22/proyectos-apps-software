import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup;
  personaRef: any;

  constructor(
    public personaSvc: PersonaService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.editForm = this.formBuilder.group({
      name: [''],
      lastname: [''],
      email: ['']
    })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.personaSvc.getPersonaById(id).subscribe(res => {
      this.personaRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.personaRef.name],
        lastname: [this.personaRef.lastname],
        email: [this.personaRef.email]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.personaSvc.updatePersona(this.editForm.value, id);
    this.router.navigate([''])
  }

}
