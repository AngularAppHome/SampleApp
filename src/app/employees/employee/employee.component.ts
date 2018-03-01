import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();
  }

  onSubmit(employeeForm:NgForm){
    debugger
      this.employeeService.insertEmployee(employeeForm.value);
      this.resetForm(employeeForm);

  }
  resetForm(employeeForm?:NgForm){
    if(employeeForm != null)
    employeeForm.reset();
    this.employeeService.selectedEmployee ={
      $key :null,
      name:'',
      position:'',
      office:'',
      salary:0
    }

  }

}
