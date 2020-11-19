import { unwrapResolvedMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { by, element } from 'protractor';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  luserid = 'User ID ';
  lpassword = 'Password';
  fruits = ['Apple', 'Banana'];
  fruitname = '';
  counter = 0;
  salary = '22222.23';
  uname = 'NN';
  testboolean = false;
  unametp = '';
  testingparams = '';
  pwd = '';
  result = 0;
  msg = '';

  cars = [{ name: 'bmw', available: false }, { name: 'Honda', available:false  }];

  constructor(private activatedRoute: ActivatedRoute, private calculator: CalculatorService) {


  }

  selectedfruit(): void {
    // this.fruitname = fruits
  }
  booleandemotrue(): void {
    this.testboolean = true;
  }
  booleandemofalse(): void {
    this.testboolean = false;
  }
  ngOnInit(): void {
    console.log('init called');
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  verifyUser(): void {
    this.testingparams = this.activatedRoute.snapshot.params.ids;
    this.result = this.calculator.calc(3, 4);
    if (this.uname === this.pwd) {
      this.msg = 'Welcome, You are allowed' ;
    } else {
      this.msg = 'Sorry, You are not allowed';
    }
  }

  methodkuchbhi(): void {
    this.unametp = this.uname;
  }

  checkEvent(event): void{
    console.log(event);
  }

}
