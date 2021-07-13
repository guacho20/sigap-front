import { BarMenu } from 'src/app/admin/shared/class/barmenu';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TablaComponent, UtilitarioService } from 'ngprime-core';

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
    this.tabTabla1.setTitulo('OBJETIVOS')
    this.tabTabla1.getColumna('ide_proyecto').setCombo('ge_proyecto', 'ide_proyecto', 'detalle_proyecto');
    this.tabTabla1.getColumna('ide_proyecto').setNombreVisual('proyecto');
    this.tabTabla1.getColumna('ide_objetivo').setNombreVisual('código');
    this.tabTabla1.getColumna('detalle_objetivo').setNombreVisual('OBJETIVO');
    this.tabTabla1.getColumna('ide_proyecto').setLongitud(25);
    this.tabTabla1.getColumna('ide_objetivo').setLongitud(10);
    this.tabTabla1.getColumna('detalle_objetivo').setLongitud(25);
    this.tabTabla1.onPageChange= () => {this.actualizaSemaforo;};
    this.tabTabla1.setRows(5);
    this.tabTabla1.setLectura(true);
    this.tabTabla1.dibujar();

    await this.tabTabla2.setTabla('ge_matriz_frecuencia', 'ide_matriz', 2);
    this.tabTabla2.agregarRelacion(this.tabTabla3);
    this.tabTabla2.setTitulo('REGISTRO MATRIZ FRECUENCIA')
    this.tabTabla2.getColumna('ide_perspectiva').setCombo('ge_perspectiva', 'ide_perspectiva', 'detalle_perspectiva');
    this.tabTabla2.getColumna('ide_frecuencia').setCombo('ge_frecuencia', 'ide_frecuencia', 'detalle_frecuencia');
    this.tabTabla2.getColumna('abs_rela').setComboObject(this.lista1);
    this.tabTabla2.getColumna('crece_decre').setComboObject(this.lista2);
    this.tabTabla2.getColumna('meta').setValorDefecto(0);
    this.tabTabla2.getColumna('linea_base').setValorDefecto(0);
    this.tabTabla2.getColumna('ide_perspectiva').setUnico(true);
    this.tabTabla2.getColumna('ide_objetivo').setUnico(true);
    this.tabTabla2.getColumna('ide_perspectiva').setNombreVisual('perspectiva');
    this.tabTabla2.getColumna('ide_frecuencia').setNombreVisual('frecuencia');
    this.tabTabla2.getColumna('abs_rela').setNombreVisual('abs rela');
    this.tabTabla2.getColumna('crece_decre').setNombreVisual('crece/decrece');
    this.tabTabla2.getColumna('meta').setNombreVisual('META');
    this.tabTabla2.getColumna('linea_base').setNombreVisual('linea base');
    this.tabTabla2.getColumna('detalle_linea_base').setNombreVisual('detalle linea base');
    this.tabTabla2.getColumna('detalle_meta').setNombreVisual('detalle meta');
    this.tabTabla2.getColumna('detalle_forma_control').setNombreVisual('detalle forma control');
    this.tabTabla2.getColumna('ide_matriz').setNombreVisual('código');
    this.tabTabla2.setTipoFormulario();
    this.tabTabla2.onPageChange= () => {this.actualizaSemaforo;};
    this.tabTabla2.dibujar();

    await this.tabTabla3.setTabla('ge_variacion', 'ide_variacion', 3);
    this.tabTabla3.setTitulo('REGISTRO VARIACIONES');
    this.tabTabla3.getColumna('valor_variacion').setMetodoBlur = () => { this.actualizaSemaforo(); };
    this.tabTabla3.getColumna('ide_variacion').setNombreVisual('código');
    this.tabTabla3.getColumna('valor_variacion').setNombreVisual('valor variación');
    this.tabTabla3.getColumna('fecha_variacion').setNombreVisual('fecha variación');
    this.tabTabla3.getColumna('ide_variacion').setLongitud(10);
    this.tabTabla3.getColumna('fecha_variacion').setLongitud(10);
    this.tabTabla3.onDibujar = () => {this.actualizaSemaforo();}
    this.tabTabla3.setRows(5);
    this.tabTabla3.dibujar();
   
  }
  
  ngOnInit(): void {
  }

  actualizaSemaforo(): string {
    this.total = 0;
    let valor = 0;
    this.tabTabla3.datos.forEach(async element => {
      this.total = this.total+ Number(element['valor_variacion']);
    });
    const meta = this.tabTabla2.getValor('meta');
    const lineabase = this.tabTabla2.getValor('linea_base');
     valor = this.total;
    console.log(valor, meta, lineabase);
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
  async guardar(): Promise<void> {
    if (this.tabTabla2.isGuardar()) {
      if (await this.validarProyectoPerspectivaUnico('Restricción única, ya existe  un registro del objetivo con la perspectiva seleccionada')) {
        if (this.tabTabla3.isGuardar()) {
          this.utilitarioSvc.guardarPantalla(this.tabTabla2, this.tabTabla3);
        }
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

  validarProyectoPerspectivaUnico(mensaje: string): Promise<boolean> {
    const sql = `select ide_matriz from ge_matriz_frecuencia where ide_perspectiva=$1 and ide_objetivo=$2`;
    const objetivo = this.tabTabla1.getValor('ide_objetivo');
    const perspectiva = this.tabTabla2.getValor('ide_perspectiva');
    // console.log(objetivo, perspectiva);
    return new Promise(resolve => {
      this.utilitarioSvc.getConsultaGenerica(sql, [objetivo, perspectiva]).subscribe(res => {
        if (res.datos.length > 0) {
          this.utilitarioSvc.agregarMensajeAdvertencia(mensaje);
          resolve(false);
        }
        else {
          resolve(true);
        }
      }, (err) => {
        resolve(false);
      })
    });
  }

}
