import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasSistemaRoutingModule } from './tablas-sistema-routing.module';
import { TablasSistemaComponent } from './tablas-sistema.component';


@NgModule({
  declarations: [
    TablasSistemaComponent
  ],
  imports: [
    CommonModule,
    TablasSistemaRoutingModule
  ]
})
export class TablasSistemaModule { }
