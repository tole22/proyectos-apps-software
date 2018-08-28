import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: Http) { }

  getData(url: string){
    return this.http.get(url).pipe(map((res: Response) => res.json()));
  }

  
}
