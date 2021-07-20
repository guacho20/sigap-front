import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from 'ngprime-core';
import { UploadArchivoComponent } from './upload-archivo/upload-archivo.component';
import { NgProgressModule } from 'ngx-progressbar';



@NgModule({
  declarations: [
    UploadArchivoComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    NgProgressModule
  ],
  exports: [
    UploadArchivoComponent
  ]
})
export class ComponentsModule { }
