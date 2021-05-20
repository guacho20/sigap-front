import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TablaComponent, UtilitarioService } from 'ngprime-core';
import { Condicion } from 'ngprime-core/lib/interfaces/condicion';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, AfterViewInit {

  @ViewChild('tabTabla1', { static: false }) tabTabla1: TablaComponent;

  condicionTabla2: Condicion = { condicion: 'ide_rovehi = $1', valores: [-1] };

  constructor(private utilitarioSvc: UtilitarioService) { }

  ngOnInit(): void { }

  async ngAfterViewInit(): Promise<void> {

    await this.tabTabla1.setTabla('seg_usuario', 'ide_segusu', 1);
    this.tabTabla1.getColumna('fecha_reg_segusu').setValorDefecto(this.utilitarioSvc.getFechaActual());
    this.tabTabla1.getColumna('ide_segusu').setNombreVisual('codigo');
    this.tabTabla1.getColumna('ide_segper').setNombreVisual('perfil');
    this.tabTabla1.getColumna('nombre_segusu').setNombreVisual('nombre');
    this.tabTabla1.getColumna('username_segusu').setNombreVisual('usuario');
    this.tabTabla1.getColumna('correo_segusu').setNombreVisual('correo');
    this.tabTabla1.getColumna('fecha_reg_segusu').setNombreVisual('fecha registro');
    this.tabTabla1.getColumna('activo_segusu').setNombreVisual('activo');
    this.tabTabla1.getColumna('bloqueado_segusu').setNombreVisual('bloqueado');
    this.tabTabla1.getColumna('cambia_clave_segusu').setNombreVisual('cambia clave');
    this.tabTabla1.getColumna('foto_segusu').setVisible(false);
    this.tabTabla1.getColumna('fecha_reg_segusu').setLectura(true);
    this.tabTabla1.getColumna('cambia_clave_segusu').setValorDefecto(true);
    this.tabTabla1.getColumna('cambia_clave_segusu').setLectura(true);
    this.tabTabla1.getColumna('password_segusu').setLectura(true);
    this.tabTabla1.getColumna('activo_segusu').setValorDefecto(true);
    this.tabTabla1.getColumna('bloqueado_segusu').setValorDefecto(false);
    this.tabTabla1.getColumna('tema_segusu').setVisible(false);
    this.tabTabla1.getColumna('tema_segusu').setVisible(false);
    this.tabTabla1.getColumna('foto_segusu').setUpload();
    this.tabTabla1.getColumna('username_segusu').setMetodoChange = () => { this.generarClave(); };
    this.tabTabla1.onPageChange = () => { this.cambiarEstadoNick(); };
    this.tabTabla1.getColumna('ide_segper').setComboSql('select ide_segper as value, nombre_segper as label from seg_perfil  where activo_segper=true');
    this.tabTabla1.setMensajeInfo('Cuando se crean un usuario nuevo la clave es la misma que el valor del campo USERNAME');
    this.tabTabla1.setTipoFormulario();
    await this.tabTabla1.dibujar();
    this.cambiarEstadoNick();
  }

  insertar(): void {
    if (this.tabTabla1.isFocus()) {
      console.log('isfocus 1');
      this.tabTabla1.insertar();
    }
    this.cambiarEstadoNick();
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

  generarClave(): void {
    console.log('ejecuto este metodo', this.tabTabla1.getValor('username_segusu'));
    this.tabTabla1.setValor('password_segusu', this.tabTabla1.getValor('username_segusu'));
    // this.tabTabla1.setva.setValorDefecto('123456');
  }

  cambiarEstadoNick(): void {
    console.log(this.tabTabla1.isFilaInsertada());
    console.log(// event.first = Index of the first record
      // event.rows = Number of rows to display in new page
      // event.page = Index of the new page
      'event.pageCount = Total number of pages');
    if (this.tabTabla1.isFilaInsertada()){
      this.tabTabla1.getColumna('username_segusu').setLectura(false);
    }else {
      this.tabTabla1.getColumna('username_segusu').setLectura(true);
    }
  }

}
