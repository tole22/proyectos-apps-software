import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { ImageEditorComponent } from './image-editor/image-editor.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { ImagesService } from './images.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageEditorComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [EmployeeService, ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
