import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/shared/components/header/models/employee.interface';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  
  employee: Employee;

  constructor(private router: Router, private employeesService: EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined') {
      this.router.navigate(['list']);
    }
  }

  onGotoEdit():void {
    this.navigationExtras.state.value = this.employee;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

  async onDelete(): Promise<void> {
    try {
      await this.employeesService.onDeleteEmployee(this.employee?.id);
      alert('Deleted');
      this.onGoBackToList();
    } catch (error) {
      console.log(error);
    }
  }

}
