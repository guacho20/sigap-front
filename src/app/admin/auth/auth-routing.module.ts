import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { IsloginGuard } from '../guards/islogin.guard';

const routes: Routes = [
  { path: 'login', canActivate: [IsloginGuard], component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
