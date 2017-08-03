import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {DataTableModule} from "angular2-datatable";
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { routing } from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { PostService } from './services/post/post.service';
import { EstadosService } from './services/estados/estados.service';
import { MysqlService } from './services/msql/mysql.service';
import { AutosService } from './services/autos/autos.service';
import { SensoresService } from './services/sensores/sensores.service';

import { CarRegisterComponent } from './components/car-register/car-register.component';
import { FlowRegisterComponent } from './components/flow-register/flow-register.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { MapsComponent } from './components/maps/maps.component';
import { SemaphoreGroupComponent } from './components/semaphore-group/semaphore-group.component';
import { SemaphoreTimeComponent } from './components/semaphore-time/semaphore-time.component';
import { SensorRegisterComponent } from './components/sensor-register/sensor-register.component';

import { DetalleAutosComponent } from './components/detalle-autos/detalle-autos.component';

import { DiagramasComponent } from './components/diagramas/diagramas.component';
import { DetalleEstadoComponent } from './components/detalle-estado/detalle-estado.component';
import { DibujoComponent } from './components/dibujo/dibujo.component';
import { Dibujo2Component } from './components/dibujo2/dibujo2.component';
import { Dibujo3Component } from './components/dibujo3/dibujo3.component';
import { Dibujo4Component } from './components/dibujo4/dibujo4.component';
import { Dibujo5Component } from './components/dibujo5/dibujo5.component';

import { AdminComponent } from './components/admin/admin.component';

import { FlujoRegistroComponent } from './components/flujo-registro/flujo-registro.component';
import { MultasRegistroComponent } from './components/multas-registro/multas-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CarRegisterComponent,
    FlowRegisterComponent,
    GraphicsComponent,
    MapsComponent,
    SemaphoreGroupComponent,
    SemaphoreTimeComponent,
    SensorRegisterComponent,
    DetalleEstadoComponent,    
    DiagramasComponent,
    DibujoComponent,
    Dibujo2Component,
    Dibujo3Component,
    Dibujo4Component,
    Dibujo5Component,
    AdminComponent,
    DetalleAutosComponent,
    FlujoRegistroComponent,
    MultasRegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    routing,
    ChartsModule ,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    DataTableModule,
    Ng2SmartTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5Czm6jd2LHVfaFUT8AhHiRGGbk3IDwLU'
    })
  ],
  providers: [
    PostService,
    EstadosService,
    MysqlService,
    AutosService,
    SensoresService
    ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
