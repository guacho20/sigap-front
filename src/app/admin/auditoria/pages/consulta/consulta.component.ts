import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TablaComponent } from 'ngprime-core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: [
  ]
})
export class ConsultaComponent implements OnInit, AfterViewInit{

  @ViewChild('tabTabla1', { static: false }) tabTabla1: TablaComponent;

  constructor() { }

  async ngAfterViewInit(): Promise<void> {
    await this.tabTabla1.setTabla('seg_auditoria_acceso', 'ide_seauac', 1);
    this.tabTabla1.getColumna('ide_seacau').setVisible(false);
    this.tabTabla1.getColumna('ide_segusu').setVisible(false);
    this.tabTabla1.getColumna('seg_ide_segusu').setVisible(false);
    this.tabTabla1.getColumna('fin_seauac').setVisible(false);
    this.tabTabla1.setLectura(true);
    this.tabTabla1.dibujar();
  }

  ngOnInit(): void {
  }

}
