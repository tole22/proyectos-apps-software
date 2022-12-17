import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {

    const params = new HttpParams().append('page', '1');

    // const headers = new HttpHeaders({
    //   'token-usuario': 'ABC123564654546'
    // });

    return this.http.get('https://reqres.in/api/user', {
      params
      //, headers lo hago en el interceptor
    }).pipe(
      map((resp: any) => resp.data)
     // , catchError(this.manejarError) . lo hago en el interceptor
    );
  }

  
}
