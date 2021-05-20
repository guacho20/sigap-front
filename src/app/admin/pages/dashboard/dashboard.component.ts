import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fechaUltimoAcceso: string;

  constructor() { }

  ngOnInit(): void {
    this.fechaUltimoAcceso = localStorage.getItem('ultimoAcceso');
  }

}
