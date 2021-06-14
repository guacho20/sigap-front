import { DireccionComponent } from './pages/direccion/direccion.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { MatrizgerencialComponent } from './pages/matrizgerencial/matrizgerencial.component';
import { PerspectivaComponent } from './pages/perspectiva/perspectiva.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrecuenciaComponent } from './pages/frecuencia/frecuencia.component';

const routes: Routes = [
  { path: 'frecuencia', component: FrecuenciaComponent },
  {path:'perspectiva', component: PerspectivaComponent},
  {path:'matriz',component:MatrizgerencialComponent},
  {path:'proyecto',component:ProyectoComponent},
  {path:'direccion',component:DireccionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerencialpdotRoutingModule { }
