import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AutosService {
  id:any;

  constructor(private http: Http) { }

  getFlujoHistorial() {
    return this.http.get('http://localhost:3000/api/flujohistorial')
      .map(res => res.json());
  }


  getMultasHistorial() {
    return this.http.get('http://localhost:3000/api/multashistorial')
      .map(res => res.json());
  }

  getAllRegistros() {
    return this.http.get('http://localhost:3000/api/mysql')
      .map(res => res.json());
  }


  getAuto(id){
           
  }

  getFlujoRegistro() {
    return this.http.get('http://localhost:3000/api/flujo_registro')
      .map(res => res.json());
  }

  getFlujoRegistroBus() {
    return this.http.get('http://localhost:3000/api/flujo_registro/bus')
      .map(res => res.json());
  }

  getFlujoRegistroMinibus() {
    return this.http.get('http://localhost:3000/api/flujo_registro/minibus')
      .map(res => res.json());
  }

  getFlujoRegistroPesado() {
    return this.http.get('http://localhost:3000/api/flujo_registro/pesado')
      .map(res => res.json());
  }

  getFlujoRegistroPolicia() {
    return this.http.get('http://localhost:3000/api/flujo_registro/policia')
      .map(res => res.json());
  }

  getFlujoRegistroParticular() {
    return this.http.get('http://localhost:3000/api/flujo_registro/particular')
      .map(res => res.json());
  }

  getFlujoRegistroAmbulancia() {
    return this.http.get('http://localhost:3000/api/flujo_registro/ambulancia')
      .map(res => res.json());
  }

  getRegistroInfracciones() {
    return this.http.get('http://localhost:3000/api/flujo_registro/infracciones')
      .map(res => res.json());
  }


  

  addAutos(newTask){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/autos', JSON.stringify(newTask), {headers: headers})
    .map(res => res.json());
  }
    
  deleteAutos(id){
    return this.http.delete('/api/autos/'+id).map(res => res.json());
  }
    
  updateAutos(task){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/autos/'+task._id, JSON.stringify(task), {headers: headers})
    .map(res => res.json());
  }


}

