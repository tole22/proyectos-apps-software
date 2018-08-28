import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImagesService } from '../images.service';


@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
})
export class ImageEditorComponent implements OnInit {

  public images = [];

  constructor(private _imgService : ImagesService) { }

 

  ngOnInit() {
    
      this._imgService.getImages()// llamo al servicio para darme los empleados
        //pero me tengo que subscribir a los observables para poder recibir esta data
        .subscribe(data => {this.images = data["photos"];
        console.log(this.images)});
       // .subscribe(data => console.log(data));
    }
  }
  

