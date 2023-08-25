import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url='http://localhost:5210/api/employee/Add';

  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
   
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/Employee/Get');

  }


addEmployee(addEmployeeRequest : Employee): Observable<Employee>
{
 // addEmployeeRequest.id ='00000000-0000-0000-000000000000'; 
  return this.http.post<Employee>(this.baseApiUrl + 'api/Employee/Add',addEmployeeRequest);
}

saveEmployee(saveEmployeeRequest : Employee) : Observable<Employee>
{

 // saveEmployeeRequest.id ='00000000-0000-0000-000000000000';
 return this.http.post<Employee>(this.baseApiUrl + 'api/Employee/Add',saveEmployeeRequest)
}

saveuser(data:any){
  return this.http.post(this.url,data);
  
}

getEmployee(id : string): Observable<Employee>{
  return this.http.get<Employee>(this.baseApiUrl + 'api/Employee/GetBy/' + id);
}

updateEmployee(id : string, updateEmployeeRequest : Employee) : Observable<Employee>{


  return this.http.put<Employee>(this.baseApiUrl + 'api/Employee/Edit/' ,updateEmployeeRequest);
}

deleteEmployee(id : string) : Observable<Employee>{


  return this.http.delete<Employee>(this.baseApiUrl + 'api/Employee/Delete/'+id);
}




}