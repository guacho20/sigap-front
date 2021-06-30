import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './admin/auth/auth.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    AdminModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
