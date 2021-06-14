import { SharedModule } from './../shared/shared.module';
import { ComponentesModule } from 'ngprime-core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerencialpdotRoutingModule } from './gerencialpdot-routing.module';
import { FrecuenciaComponent } from './pages/frecuencia/frecuencia.component';
import { PerspectivaComponent } from './pages/perspectiva/perspectiva.component';
import { MatrizgerencialComponent } from './pages/matrizgerencial/matrizgerencial.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { DireccionComponent } from './pages/direccion/direccion.component';


@NgModule({
  declarations: [
    FrecuenciaComponent,
    PerspectivaComponent,
    MatrizgerencialComponent,
    ProyectoComponent,
    DireccionComponent
  ],
  imports: [
    CommonModule,
    GerencialpdotRoutingModule,
    ComponentesModule,
    SharedModule
  ]
})
export class GerencialpdotModule { }
