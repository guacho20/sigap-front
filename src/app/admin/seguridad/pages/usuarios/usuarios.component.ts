import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BarMenu } from '../../../shared/class/barmenu';
import { TablaComponent, UtilitarioService } from 'ngprime-core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent extends BarMenu implements OnInit, AfterViewInit {

  @ViewChild('tabTabla1', { static: false }) tabTabla1: TablaComponent;

  constructor(private utilitarioSvc: UtilitarioService) {
    super();
  }

  async ngAfterViewInit(): Promise<void> {
    await this.tabTabla1.setTabla('seg_usuario', 'ide_segusu', 1);
    this.tabTabla1.setTitulo('Registrar usuario');
    this.tabTabla1.getColumna('ide_segper').setCombo('seg_perfil', 'ide_segper', 'nombre_segper');
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
    /*this.tabTabla1.getColumna('ide_segemp').setTamanoFormularioColumna(4);
    this.tabTabla1.getColumna('nombre_segusu').setTamanoFormularioColumna(6);
    this.tabTabla1.getColumna('username_segusu').setTamanoFormularioColumna(2);*/
    this.tabTabla1.setTipoFormulario();
    this.tabTabla1.dibujar();
  }

  ngOnInit(): void {
  }

  insertar(): void {
    if (this.tabTabla1.isFocus()) {
      this.tabTabla1.insertar();
    }
  }
  async guardar(): Promise<void> {
    if (await this.tabTabla1.isGuardar()) {
      this.utilitarioSvc.guardarPantalla(this.tabTabla1);
    }
  }
  eliminar(): void {
    if (this.tabTabla1.isFocus()) {
      this.tabTabla1.eliminar();
    }
  }

}
