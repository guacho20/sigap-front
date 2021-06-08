import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { ComponentesModule } from 'ngprime-core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsuariosComponent,
    OpcionesComponent,
    PermisosComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ComponentesModule,
    SharedModule
  ]
})
export class SeguridadModule { }
