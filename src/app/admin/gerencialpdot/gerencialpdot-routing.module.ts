import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestroySessionGuard } from '@admin/guards/destroy-session.guard';
import { SeguridadGuard } from '@admin/guards/seguridad.guard';

// componentes
import { DireccionComponent } from './pages/direccion/direccion.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { MatrizgerencialComponent } from './pages/matrizgerencial/matrizgerencial.component';
import { ObjetivosComponent } from './pages/objetivos/objetivos.component';
import { PerspectivaComponent } from './pages/perspectiva/perspectiva.component';
import { FrecuenciaComponent } from './pages/frecuencia/frecuencia.component';
import { ComponenteComponent } from './pages/componente/componente.component';

const routes: Routes = [
  { path: 'frecuencia', canDeactivate: [DestroySessionGuard], canActivate: [SeguridadGuard], component: FrecuenciaComponent },
  { path: 'perspectiva', canDeactivate: [DestroySessionGuard], canActivate: [SeguridadGuard], component: PerspectivaComponent },
  { path: 'matriz', canDeactivate: [DestroySessionGuard], canActivate: [SeguridadGuard], component: MatrizgerencialComponent },
  { path: 'proyecto', canDeactivate: [DestroySessionGuard], canActivate: [SeguridadGuard], component: ProyectoComponent },
  { path: 'direccion', canDeactivate: [DestroySessionGuard], canActivate: [SeguridadGuard], component: DireccionComponent },
  { path: 'componente', canDeactivate: [DestroySessionGuard], canActivate: [SeguridadGuard], component: ComponenteComponent},
  { path: 'objetivos', canDeactivate: [DestroySessionGuard], canActivate: [SeguridadGuard], component: ObjetivosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerencialpdotRoutingModule { }
