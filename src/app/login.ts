import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class Login implements CanActivate {
  visible = false;
  constructor(private router: Router) {


  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const isLogin = sessionStorage.getItem('isLogin');
    if (isLogin) {
      this.show();
      return true;
    } else {
      this.hide();
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
