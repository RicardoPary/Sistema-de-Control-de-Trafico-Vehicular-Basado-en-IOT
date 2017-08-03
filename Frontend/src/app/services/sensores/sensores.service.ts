import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SensoresService {

  constructor(private http: Http) { }

  getAllSensores() {
    return this.http.get('http://localhost:3000/api/sensores').map(res => res.json());
  }


   deleteSensor(id){
    return this.http.delete('http://localhost:3000/api/sensoresd/'+id).map(res => res.json());
  }

  getPromedio() {
    return this.http.get('http://localhost:3000/api/sensor/avg/promedio').map(res => res.json());
  }

}
