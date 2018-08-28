import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { JsonService } from './json.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private http:Http, private json: JsonService) {}
    cityName="";
    cityHumid="";
    searchCity(){
      this.http.get("http://api.openweathermap.org/data/2.5/weather?APPID=12758f196621475a3a37977f73e6c89c&q="+this.cityName)
      .subscribe(
        (res:Response) => {
          const weatherCity = res.json();
          console.log(weatherCity);
          this.cityHumid = weatherCity.main.humidity;
        }
      )

    }
  title = 'app';

  ngOnInit(){
    //api de github que retorna mis repos, si no estubiera el subscribe con observables, retornaria undefined, ya que la funcion terminaria antes de que obtenga los datos
    this.json.getData("https://api.github.com/users/tole22/repos").subscribe(val => {
      console.log(val);
    });

    
  }
}
