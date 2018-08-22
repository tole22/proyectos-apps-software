import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUD';
  msg:string = "";
  hideUpdate:boolean = true;

  employees = [
    {name: 'Fazt', position: 'Manager', email: 'email1@hotmail.com'},
    {name: 'Maxi', position: 'Designer', email: 'email2@hotmail.com'},
    {name: 'Farkas', position: 'Cleaner', email: 'email3@hotmail.com'},
  ];

  model:any = {};
  model2:any = {};



  addEmployee():void{
    this.employees.push(this.model);
    this.msg = "Employee added successfully!";
  }

  deleteEmployee(i):void{
    var answer = confirm('Are you Sure to Delete it ?');
    if(answer){
      this.employees.splice(i, 1);
    }
    this.msg = "Employee deleted!";
  }

  myValue;
  editEmployee(i):void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void{
    let i =this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = "Employee's info update correctly!";
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }
}
