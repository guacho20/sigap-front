import { ObjetivosComponent } from './pages/objetivos/objetivos.component';
import { ComponentesModule } from 'ngprime-core';
import { DireccionComponent } from './pages/direccion/direccion.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { MatrizgerencialComponent } from './pages/matrizgerencial/matrizgerencial.component';
import { PerspectivaComponent } from './pages/perspectiva/perspectiva.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrecuenciaComponent } from './pages/frecuencia/frecuencia.component';
import { ComponenteComponent } from './pages/componente/componente.component';

const routes: Routes = [
  { path: 'frecuencia', component: FrecuenciaComponent },
  { path: 'perspectiva', component: PerspectivaComponent },
  { path: 'matriz', component: MatrizgerencialComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'direccion', component: DireccionComponent },
  { path: 'componente', component: ComponenteComponent},
  { path: 'objetivos', component: ObjetivosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerencialpdotRoutingModule { }
