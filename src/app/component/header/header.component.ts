import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  /** Configurations for the Header page */
  constructor() {
  }

  public username = 'Bob';

  public ngOnInit(): void {
  }
}
