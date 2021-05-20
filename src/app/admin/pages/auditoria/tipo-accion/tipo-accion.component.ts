import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TablaComponent, UtilitarioService } from 'ngprime-core';

@Component({
  selector: 'app-tipo-accion',
  templateUrl: './tipo-accion.component.html',
  styleUrls: ['./tipo-accion.component.css']
})
export class TipoAccionComponent implements OnInit, AfterViewInit {

  @ViewChild('tabTabla1', { static: false }) tabTabla1: TablaComponent;

  constructor(private utilitarioSvc: UtilitarioService) { }

  async ngAfterViewInit(): Promise<void> {
    await this.tabTabla1.setTabla('seg_accion_auditoria', 'ide_seacau', 1);
    this.tabTabla1.dibujar();
  }

  ngOnInit(): void {
  }

  insertar(): void {
    if (this.tabTabla1.isFocus()) {
      console.log('isfocus 1');
      this.tabTabla1.insertar();
    }
  }

  eliminar(): void {
    if (this.tabTabla1.isFocus()) {
      this.tabTabla1.eliminar();
    }
  }

  async guardar(): Promise<void> {
    if (await this.tabTabla1.isGuardar()) {
      console.log('entre al guardar');
      // this.utilitarioSvc.guardarPantalla(this.tabTabla1);
    }
  }

}
