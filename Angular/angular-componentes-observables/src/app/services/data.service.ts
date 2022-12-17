import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nombre$ = new EventEmitter<string>();

  constructor() { }
}
