import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'private',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'auditoria', // canActivate: [SeguridadGuard],
        loadChildren: () => import('./auditoria/consulta/consulta.module').then(m => m.ConsultaModule)
      },
      {
        path: 'tipo-accion', // canActivate: [SeguridadGuard],
        loadChildren: () => import('./auditoria/tipo-accion/tipo-accion.module').then(m => m.TipoAccionModule)
      },
      {
        path: 'empresa', // canActivate: [SeguridadGuard],
        loadChildren: () => import('./seguridad/empresa/empresa.module').then(m => m.EmpresaModule)
      },
      {
        path: 'opciones', // canActivate: [SeguridadGuard],
        loadChildren: () => import('./seguridad/opcion/opcion.module').then(m => m.OpcionModule)
      },
      {
        path: 'permisos', // canActivate: [SeguridadGuard],
        loadChildren: () => import('./seguridad/permiso/permiso.module').then(m => m.PermisoModule)
      },
      {
        path: 'usuario', // canActivate: [SeguridadGuard],
        loadChildren: () => import('./seguridad/usuario/usuario.module').then(m => m.UsuarioModule)
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
