import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Persona } from './persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private angularFireStore: AngularFirestore) { }

  getPersonas() {
    return this.angularFireStore
      .collection('personas')
      .snapshotChanges()
  }

  getPersonaById(id) {
    return this.angularFireStore
      .collection('personas')
      .doc(id)
      .valueChanges()
  }

  createPersona(persona: Persona) {
    return new Promise<any> ((resolve, reject) => {
      this.angularFireStore
        .collection('personas')
        .add(persona)
        .then( (response) => {
          console.log(response)
        },
        (error) => {
          reject(error)
        })
    })
  }

  updatePersona(persona: Persona, id) {
    return this.angularFireStore
      .collection('personas')
      .doc(id)
      .update({
        name: persona.name,
        lastname: persona.lastname,
        email: persona.email
      })
  }

  deletePErsona(persona) {
    return this.angularFireStore
      .collection('personas')
      .doc(persona.id)
      .delete();
  }
}

