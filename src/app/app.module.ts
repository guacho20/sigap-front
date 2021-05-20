import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgprimeCoreModule } from 'ngprime-core';
import { AppComponent } from './app.component';
import { AuthModule } from './admin/auth/auth.module';
import { AdminModule } from './admin/pages/admin.module';
import { environment } from '../environments/environment.prod';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    AdminModule,
    NgprimeCoreModule.forRoot(environment),
    NgxSpinnerModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
