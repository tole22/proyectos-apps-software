import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { Inventario } from './inventario';


import { map, catchError, first } from 'rxjs/operators';

@Injectable()
export class InventarioService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8000/inventario';
  constructor(private http: Http) { }

  getInventarios():Observable<Inventario[]>{
    let url = `${this.url}`;
    return this.http.get(url)
      .pipe(map(r => r.json()
      , catchError(this.handleError)));
  }

  getInventario(id: number):Observable<Inventario[]>{
    let url = `${this.url}/${id}`;
    return this.http.get(url)
      .pipe(first())
      .pipe(map(r => r.json()
      , catchError(this.handleError)));
  }

  addInventario(inventario: Inventario){
    let url = `${this.url}`;
    let iJson = JSON.stringify(inventario);
    return this.http.post(url, iJson, {headers: this.headers})
        .pipe(map(r => r.json()
        , catchError(this.handleError)));
  }

  putInventario(inventario: Inventario) {
    let url = `${this.url}`;
    let iJson = JSON.stringify(inventario);
    return this.http.put(url, iJson, {headers: this.headers})
        .pipe(map(r => r.json()
        , catchError(this.handleError)));
  }

  delInventario(id: number) {
    let url = `${this.url}/${id}`;
    
    return this.http.delete(url)
        .pipe(map(r => r.json()
        , catchError(this.handleError)));
  }

  private handleError(error : Response | any){
    let errMsg: string;
    if (error instanceof Response){
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`; 
    }else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
