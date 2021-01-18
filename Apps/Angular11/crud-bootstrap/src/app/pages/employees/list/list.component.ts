import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  employees$ = this.employeesService.employees;

  constructor(private router: Router, private employeesService: EmployeesService) { }

  ngOnInit(): void {
  }

  onGotoEdit(item: any):void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGotoSee(item: any):void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  async onGotoDelete(empId: string): Promise<void> {
    try {
      await this.employeesService.onDeleteEmployee(empId);
      alert('Deleted');
    } catch (error) {
      console.log(error);
    }
  }

}
