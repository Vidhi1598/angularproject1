import { Injectable } from '@angular/core';


export class Employee{

  id: number ;
  name: string;
  city: string;

}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  addEmployeeSerice(employee: Employee): void {
    console.log(employee.id);
    console.log(employee.name);
    console.log(employee.city);

  }
}
