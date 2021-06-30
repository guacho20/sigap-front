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
    this.tabTabla1.getColumna('ide_seauac').setNombreVisual('código');
    this.tabTabla1.getColumna('fecha_seauac').setNombreVisual('fecha');
    this.tabTabla1.getColumna('hora_seauac').setNombreVisual('hora');
    this.tabTabla1.getColumna('ip_seauac').setNombreVisual('ip');
    this.tabTabla1.getColumna('detalle_seauac').setNombreVisual('detalle');
    this.tabTabla1.getColumna('device_seauac').setNombreVisual('dispositivo');
    this.tabTabla1.getColumna('useragent_seauac').setNombreVisual('useragent');
    this.tabTabla1.setLectura(true);
    this.tabTabla1.dibujar();
  }

  ngOnInit(): void {
  }

}
