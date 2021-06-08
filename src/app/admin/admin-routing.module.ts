import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeguridadGuard } from './guards/seguridad.guard';

const routes: Routes = [
  {
    path: 'private', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'auditoria', canActivate: [SeguridadGuard], loadChildren: () => import('./auditoria/auditoria.module').then(m => m.AuditoriaModule) },
      { path: 'seguridad', canActivate: [SeguridadGuard], loadChildren: () => import('./seguridad/seguridad.module').then(m => m.SeguridadModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
