import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallajaxService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/ajaxdemo/verifyuserid.jsp';

  verifyUser(userid): Observable<any> {

    return this.http.get(this.url + '?userid=' + userid);

  }

 /*  verifyUser(userid): Promise {

    return this.http.get(this.url + '?userid=' + userid);

  } */

}
