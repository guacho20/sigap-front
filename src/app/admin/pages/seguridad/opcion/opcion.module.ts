import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpcionRoutingModule } from './opcion-routing.module';
import { OpcionComponent } from './opcion.component';
import { ComponentesModule } from 'ngprime-core';


@NgModule({
  declarations: [
    OpcionComponent,
  ],
  imports: [
    CommonModule,
    OpcionRoutingModule,
    ComponentesModule
  ]
})
export class OpcionModule { }
