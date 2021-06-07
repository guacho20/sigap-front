import { Component, OnInit } from '@angular/core';
import { AuthService, UtilitarioService } from 'ngprime-core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  fechaUltimoAcceso: string;
  pantallas: [];
  userAgent: any = null;
  usuario = [];
  sistemaOperativo: any = null;
  dispositivo: string;

  constructor(
    private authSvc: AuthService,
    private utilitarioSvc: UtilitarioService
  ) {
    this.userAgent = this.utilitarioSvc.getUserAgent();
    this.usuario = authSvc.getUserData();
    this.dispositivo = this.utilitarioSvc.getPlataforma();
    this.sistemaOperativo = this.utilitarioSvc.getSistemaOperativo();
  }

  ngOnInit(): void {
    this.fechaUltimoAcceso = localStorage.getItem('ultimoAcceso');
    this.authSvc.pantallasMasUsadas().subscribe(resp => {
      this.pantallas = resp.datos;
    });
  }

}
