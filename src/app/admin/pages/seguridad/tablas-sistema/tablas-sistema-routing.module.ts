import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasSistemaComponent } from './tablas-sistema.component';

const routes: Routes = [
  { path: '', component: TablasSistemaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasSistemaRoutingModule { }
