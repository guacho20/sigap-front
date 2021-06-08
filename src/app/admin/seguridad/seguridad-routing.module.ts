import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PermisosComponent } from './pages/permisos/permisos.component';

const routes: Routes = [
  { path: 'opcion', component: OpcionesComponent },
  { path: 'permiso', component: PermisosComponent },
  { path: 'usuario', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
