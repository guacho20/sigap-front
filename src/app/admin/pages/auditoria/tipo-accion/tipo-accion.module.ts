import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoAccionRoutingModule } from './tipo-accion-routing.module';
import { TipoAccionComponent } from './tipo-accion.component';
import { ComponentesModule } from 'ngprime-core';


@NgModule({
  declarations: [
    TipoAccionComponent
  ],
  imports: [
    CommonModule,
    TipoAccionRoutingModule,
    ComponentesModule
  ]
})
export class TipoAccionModule { }
