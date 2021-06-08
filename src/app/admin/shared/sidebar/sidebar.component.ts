import { Component, OnInit } from '@angular/core';
import { AuthService, UtilitarioService } from 'ngprime-core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(
    private authSvc: AuthService,
    private utilitarioSvc: UtilitarioService) { }

  ngOnInit(): void {
    this.menuItems = this.authSvc.getMenu();
  }

  onClick(opcion): void {
    if (this.utilitarioSvc.isUndefined(opcion.data)) {
      this.authSvc.auditoriaAccesoPantalla(opcion.data);
    }
  }

}
