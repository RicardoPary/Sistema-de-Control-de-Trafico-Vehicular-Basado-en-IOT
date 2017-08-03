import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MysqlService {

  constructor(private http: Http) { }

  getAllR() {
    return this.http.get('http://192.168.43.138:8080/')
      .map(res => res.json());
  }

}


