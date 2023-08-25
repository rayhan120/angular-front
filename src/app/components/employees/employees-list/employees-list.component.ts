import { Component } from '@angular/core';
 import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent  {
  


  employees: Employee[] =[];
 // constructor(private route:ActivatedRoute,private employeeService: EmployeesService , private router:Router){

  constructor(private route:ActivatedRoute,
    private employeeService: EmployeesService,
    private router:Router,
    ){
  }
  ngOnInit(): void {
      // this. employees.push()
    this.employeeService.getAllEmployees()
      .subscribe({
      next: (employees)=>{
         //console.log(employees);
        this.employees =employees;
      },
      error: (response)=>{
        console.log(response);

      }
      });
  }

  // deleteEmployee(id : string){
  //   this.employeeService.deleteEmployee(id)
  //   .subscribe(
  //     {
  //       next: (Response) =>{
  //         this.router.navigate(['employees']);
  //       }
  //     }
  //   )

  // }

  
  deleteEmployee(id: string): void {
    this.employees = this.employees.filter(e => e.id !== id);
    this.employeeService.deleteEmployee(id)
      .subscribe({
        error: (error) => {
          console.error('Error deleting employee:', error);
        }
      }); 
  }


  
 
  
  
  



}
