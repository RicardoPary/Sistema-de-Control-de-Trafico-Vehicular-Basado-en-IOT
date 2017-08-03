import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AutosService } from '../../services/autos/autos.service';

@Component({
  selector: 'app-multas-registro',
  templateUrl: './multas-registro.component.html',
  styleUrls: ['./multas-registro.component.css']
})
export class MultasRegistroComponent implements OnInit {

  source: LocalDataSource;

  settings = {
    add: {
      addButtonContent:    '<i class="fa fa-plus fa-lg"></i>',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
    },
    edit: {
      editButtonContent:   '<i class="fa fa-pencil-square fa-lg"></i>',
      saveButtonContent:   'Update',
      cancelButtonContent: 'Cancel',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash fa-lg"></i>',
      confirmDelete: true
    },
    columns: {
      grupo:     {title: 'Grupo'    ,filter: false},
      flujo:     {title: 'Flujo'    ,filter: false},
      rfid:      {title: 'RFID'     ,filter: false},
      prioridad: {title: 'Prioridad',filter: false},
      placa:     {title: 'Placa'    ,filter: false},
      tipo:      {title: 'Tipo'     ,filter: false},
      carnet:    {title: 'Carnet'   ,filter: false},
      otro:      {title: 'Otro'     ,filter: false},
      fecha:     {title: 'Fecha'    ,filter: false},
      hora:      {title: 'Hora'     ,filter: false}
    }
  };
  
  constructor(private flujoRegistro: AutosService) { 
    this.source = new LocalDataSource();

    this.flujoRegistro.getMultasHistorial().subscribe(data => {
      this.source.load(data);
    });
  }

  ngOnInit(){
  } 
    
  onSearch(query: string = '') {
    this.source.setFilter([
      { field: 'grupo',     search: query},
      { field: 'flujo',     search: query},
      { field: 'rfid',      search: query},
      { field: 'prioridad', search: query},
      { field: 'placa',     search: query},
      { field: 'tipo',      search: query},
      { field: 'carnet',    search: query},
      { field: 'otro',      search: query},
      { field: 'fecha',     search: query},
      { field: 'hora',      search: query}
    ], false);

  }
}

