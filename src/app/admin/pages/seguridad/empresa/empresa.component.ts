import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TablaComponent, UtilitarioService } from 'ngprime-core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit, AfterViewInit {

  @ViewChild('tabTabla1', {static: false}) tabTabla1: TablaComponent;

  constructor(private utilitarioSvc: UtilitarioService) { }

  async ngAfterViewInit(): Promise<void>{
    await this.tabTabla1.setTabla('seg_empresa', 'ide_segemp', 1);
    this.tabTabla1.setTipoFormulario();
    this.tabTabla1.dibujar();
  }

  ngOnInit(): void {
  }

  async guardar(): Promise<void> {
    if (await this.tabTabla1.isGuardar()) {
      console.log('entre al guardar');
      this.utilitarioSvc.guardarPantalla(this.tabTabla1);
    }
  }

}
