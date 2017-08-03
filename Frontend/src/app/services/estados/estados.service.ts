import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'
import { Flujo } from '../../clases/flujo';

@Injectable()
export class EstadosService {

  prueba:any;
  constructor(private http: Http) { }
  

  getAllEstados() {
    return this.http.get('http://localhost:3000/api/estados').map(res => res.json());
  }

  getAllFlujos() {
    return this.http.get('http://localhost:3000/api/flujos').map(res => res.json());
  }


/*  getAllFlujos():Observable<Flujo[]>{
    return this.http.get('api/flujos').map(
      (res) => {
        let body = res.json();
        return body;
        }
      )
  }
*/
  

  getAllGrupos() {
    return this.http.get('http://localhost:3000/api/grupos').map(res => res.json());
  }

  getGrupo(id){
    return this.http.get('http://localhost:3000/api/grupos/'+id).map(res => res.json());
  }

  getFlujo(grupo,flujo){
    return this.http.get('http://localhost:3000/api/flujo/'+grupo+'/'+flujo).map(res => res.json());
  }


  getFlujoUnico(grupo,flujo){
    return this.http.get('http://localhost:3000/api/flujounico/'+grupo+'/'+flujo).map(res => res.json());
  }


  addEstado(newTask){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('localhost:3000/api/estados', JSON.stringify(newTask), {headers: headers})
    .map(res => res.json());
  }

  getEstado(id){
    return this.http.get('http://localhost:3000/api/estado/'+id).map(res => res.json());
  }
    
  deleteEstado(id){
    return this.http.delete('/api/task/'+id).map(res => res.json());
  }
    
  updateEstado(task){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
    .map(res => res.json());
  }


}


