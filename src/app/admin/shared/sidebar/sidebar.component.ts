import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ngprime-core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.menuItems = this.authSvc.getMenu();
  }

}
