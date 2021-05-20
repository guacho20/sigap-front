import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesModule } from 'ngprime-core';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './consulta.component';


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    ComponentesModule
  ]
})
export class ConsultaModule { }
