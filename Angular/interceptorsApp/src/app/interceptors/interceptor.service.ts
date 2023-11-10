import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    const headers = new HttpHeaders({
      'token-usuario': 'ABC123564654546'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    )
  }

  manejarError(error: HttpErrorResponse) {
    console.log('ocurrio un error');
    console.warn(error);
    return throwError('Error pesonalizado');
  }
}
