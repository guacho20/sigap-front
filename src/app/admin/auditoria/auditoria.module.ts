import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditoriaRoutingModule } from './auditoria-routing.module';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { TipoAccionComponent } from './pages/tipo-accion/tipo-accion.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentesModule } from 'ngprime-core';


@NgModule({
  declarations: [
    ConsultaComponent,
    TipoAccionComponent
  ],
  imports: [
    CommonModule,
    AuditoriaRoutingModule,
    SharedModule,
    ComponentesModule
  ]
})
export class AuditoriaModule { }
