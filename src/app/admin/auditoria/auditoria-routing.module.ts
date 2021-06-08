import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { TipoAccionComponent } from './pages/tipo-accion/tipo-accion.component';

const routes: Routes = [
  { path: 'consulta', component: ConsultaComponent },
  { path: 'tipo-accion', component: TipoAccionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditoriaRoutingModule { }
