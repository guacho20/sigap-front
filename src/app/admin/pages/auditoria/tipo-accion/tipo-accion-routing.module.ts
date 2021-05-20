import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoAccionComponent } from './tipo-accion.component';

const routes: Routes = [
  {path: '', component: TipoAccionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoAccionRoutingModule { }
