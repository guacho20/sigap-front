import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeguridadGuard } from './guards/seguridad.guard';
import { Page401Component } from './shared/page401/page401.component';
import { Page404Component } from './shared/page404/page404.component';

const routes: Routes = [
  {
    path: 'private', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'no-autorizado', component: Page401Component },
      { path: 'auditoria', canActivate: [SeguridadGuard], loadChildren: () => import('./auditoria/auditoria.module').then(m => m.AuditoriaModule) },
      { path: 'seguridad', canActivate: [SeguridadGuard], loadChildren: () => import('./seguridad/seguridad.module').then(m => m.SeguridadModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: Page404Component },
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
