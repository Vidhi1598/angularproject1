import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employeeservice.service';
import { CallajaxService } from '../callajax.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  employee: Employee = new Employee();
  userValid = '';
  constructor(private empService: EmployeeService, private cajax: CallajaxService) { }

  ngOnInit(): void {
    this.employee.id = 12;
    this.employee.name = 'nau';
    this.employee.city = 'pune';
    this.empService.addEmployeeSerice(this.employee);
    this.cajax.verifyUser('nau').subscribe((data: number) => {
      console.log(data);
      if (data === 0) {
        this.userValid = 'USer Available';
      } else {
        this.userValid = 'USer Not Available';
      }
    });
    console.log('end1');
    console.log('end2');
    console.log('end3');
    console.log('end4');
  }
}
