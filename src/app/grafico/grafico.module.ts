import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from 'ngprime-core';
import {ChartModule} from 'primeng/chart';

import { GraficoRoutingModule } from './grafico-routing.module';
import { GraficoComponent } from './grafico.component';


@NgModule({
  declarations: [
    GraficoComponent
  ],
  imports: [
    CommonModule,
    GraficoRoutingModule,
    ComponentesModule
  ]
})
export class GraficoModule { }
