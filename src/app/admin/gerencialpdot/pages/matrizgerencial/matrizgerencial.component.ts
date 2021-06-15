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

  @ViewChild('tabTabla1', { static: false }) tabTabla1: TablaComponent;
  @ViewChild('tabTabla2', { static: false }) tabTabla2: TablaComponent;
  @ViewChild('tabTabla3', { static: false }) tabTabla3: TablaComponent;

  lista1 = [{ value: 0, label: 'Relativo' }, { value: 1, label: 'Absoluto' }];
  lista2 = [{ value: 0, label: 'Decrece' }, { value: 1, label: 'Crece' }];
  semaforo = '';
  total = 0;

  constructor(private utilitarioSvc: UtilitarioService) {
    super();
  }
  async ngAfterViewInit(): Promise<void> {
    await this.tabTabla1.setTabla('ge_objetivo', 'ide_objetivo', 1);
    this.tabTabla1.agregarRelacion(this.tabTabla2);
    this.tabTabla1.setRows(5);
    this.tabTabla1.setLectura(true);
    this.tabTabla1.dibujar();

    await this.tabTabla2.setTabla('ge_matriz_frecuencia', 'ide_matriz', 2);
    this.tabTabla2.agregarRelacion(this.tabTabla3);
    this.tabTabla2.getColumna('ide_perspectiva').setCombo('ge_perspectiva', 'ide_perspectiva', 'detalle_perspectiva');
    this.tabTabla2.getColumna('ide_frecuencia').setCombo('ge_frecuencia', 'ide_frecuencia', 'detalle_frecuencia');
    this.tabTabla2.getColumna('abs_rela').setComboObject(this.lista1);
    this.tabTabla2.getColumna('crece_decre').setComboObject(this.lista2);
    this.tabTabla2.getColumna('meta').setValorDefecto(0);
    this.tabTabla2.getColumna('linea_base').setValorDefecto(0);
    this.tabTabla2.setTipoFormulario();
    this.tabTabla2.dibujar();

    await this.tabTabla3.setTabla('ge_variacion', 'ide_variacion', 3);
    this.tabTabla3.getColumna('valor_variacion').setMetodoBlur = () => { this.actualizaSemaforo(); };
    this.tabTabla3.setRows(5);
    this.tabTabla3.dibujar();
  }

  ngOnInit(): void {
  }

  actualizaSemaforo(): string {
    this.total = 0;
    const valor = this.tabTabla3.getSumaColumna('valor_variacion');
    const meta = this.tabTabla2.getValor('meta');
    const lineabase = this.tabTabla2.getValor('linea_base');
    this.total = valor;
    // console.log(valor, meta, lineabase);
    if (valor < lineabase && valor < meta) { // es linea roja
      return this.semaforo = 'rojo';
    }
    if (valor > lineabase && valor < meta) {  // es linea amrailla
      return this.semaforo = 'amarillo';
    }
    if (valor > meta) {
      return this.semaforo = 'verde';
    }
    if (valor === lineabase) {
      return this.semaforo = 'verde';
    }

  }

  insertar(): void {
    if (this.tabTabla2.isFocus()) {
      this.tabTabla2.insertar();
    } else if (this.tabTabla3.isFocus()) {
      this.tabTabla3.insertar();
    }
  }
  guardar(): void {
    if (this.tabTabla2.isGuardar()) {
      if (this.tabTabla3.isGuardar()) {
        this.utilitarioSvc.guardarPantalla(this.tabTabla2, this.tabTabla3);
      }
    }
  }
  eliminar(): void {
    if (this.tabTabla2.isFocus()) {
      this.tabTabla2.eliminar();
    } else if (this.tabTabla3.isFocus()) {
      this.tabTabla3.eliminar();
    }
  }
}
