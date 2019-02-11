import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {

  visibility = true;

  constructor() { }
  mouseClick() {
    this.visibility = !this.visibility;
  }
}
