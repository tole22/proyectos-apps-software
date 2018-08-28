import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from '../../node_modules/rxjs';
import { IImage } from './image';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  //url del recurso donde obtengo los recursos
  private _url: string = "https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?earth_date=2015-6-3";

  constructor(private http: HttpClient) { }

  getImages(): Observable<any>{
    return this.http.get(this._url);
  }
}
