import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';

// componentes
import { AccountComponent } from './account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ComponentesModule } from 'ngprime-core';


@NgModule({
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule
  ]
})
export class AccountModule { }
