import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee-save',
  templateUrl: './add-employee-save.component.html',
  styleUrls: ['./add-employee-save.component.css']
})
export class AddEmployeeSaveComponent  {


  saveEmployeeRequest :Employee ={

  id: '',
  name : '',
  email: '',
  phone: 0,
  salary : 0,
  department : ''

  };
  constructor(
    private employeeService : EmployeesService,
    private router:Router){

  }

  
  ngOnInit(): void {
    
  }
  

 

  
  saveEmployee(){
      
    this.employeeService.saveEmployee(this.saveEmployeeRequest)
    .subscribe({

      next : (employee)=>{

        console.log(employee);
      }
    });

  }

  getUserFormData(data:any){

    //console.warn(data)
    this.employeeService.saveuser(data).subscribe({
      next: (Response) =>{
        this.router.navigate(['employees']);
      }
      
    });
  }

}
