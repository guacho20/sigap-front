import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpcionComponent } from './opcion.component';

const routes: Routes = [
  { path: '', component: OpcionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpcionRoutingModule { }
