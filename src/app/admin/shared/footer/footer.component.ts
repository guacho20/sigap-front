import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public appVersion = 0.1;
  public currentYear = '2020';
  constructor() { }

  ngOnInit(): void {
  }

}
