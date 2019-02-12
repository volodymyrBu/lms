import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  visibility = true;
  isLogin = false;

  constructor(public login: Login) {
    console.log('nav');
  }

  ngOnInit() {
    this.isLogin = JSON.parse(sessionStorage.getItem('isLogin'));
  }

  mouseClick() {
    this.visibility = !this.visibility;
  }
}
