import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisoRoutingModule } from './permiso-routing.module';
import { PermisoComponent } from './permiso.component';
import { ComponentesModule } from 'ngprime-core';


@NgModule({
  declarations: [
    PermisoComponent
  ],
  imports: [
    CommonModule,
    PermisoRoutingModule,
    ComponentesModule
  ]
})
export class PermisoModule { }
