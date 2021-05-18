import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ngprime-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authSvc.logout();
  }

}
