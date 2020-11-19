import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorService } from './calculator.service';
import { EmployeeService } from './employeeservice.service';
import { HttpClientModule } from '@angular/common/http';
import { CallajaxService } from './callajax.service';


const routes: Routes = [
  { path: 'loginpage/:ids', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CalculatorService, EmployeeService, CallajaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
