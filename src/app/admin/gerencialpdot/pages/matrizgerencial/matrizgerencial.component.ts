import { TablaComponent, UtilitarioService } from 'ngprime-core';
import { BarMenu } from 'src/app/admin/shared/class/barmenu';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-matrizgerencial',
  templateUrl: './matrizgerencial.component.html',
  styles: [
  ]
})
export class MatrizgerencialComponent extends BarMenu implements OnInit, AfterViewInit {

  @ViewChild('tabTabla1', {static: false}) tabTabla1: TablaComponent
  @ViewChild('tabTabla2', {static: false}) tabTabla2: TablaComponent
  @ViewChild('tabTabla3', {static: false}) tabTabla3: TablaComponent

  constructor(private utilitarioSvc: UtilitarioService) 
  {
    super();
   }
   async ngAfterViewInit(){
    await this.tabTabla1.setTabla('ge_objetivo', 'ide_objetivo', 1);
    this.tabTabla1.agregarRelacion(this.tabTabla2);
    // this.tabTabla1.filasPorPagina = 5;
    this.tabTabla1.dibujar();
    await this.tabTabla2.setTabla('ge_matriz_frecuencia', 'ide_matriz', 2);
    this.tabTabla2.agregarRelacion(this.tabTabla3);
    this.tabTabla2.setTipoFormulario();
    this.tabTabla2.dibujar();
    await this.tabTabla3.setTabla('ge_variacion', 'ide_variacion', 3);
    this.tabTabla3.dibujar();
  }

  ngOnInit(): void {
  }
  insertar(): void {
    throw new Error('Method not implemented.');
  }
  guardar(): void {
    throw new Error('Method not implemented.');
  }
  eliminar(): void {
    throw new Error('Method not implemented.');
  }
}
