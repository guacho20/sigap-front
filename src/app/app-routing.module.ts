import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './admin/auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { GraficoModule } from './grafico/grafico.module';

const routes: Routes = [
  {path: '', redirectTo: '/grafico', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    AdminModule,
    GraficoModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
