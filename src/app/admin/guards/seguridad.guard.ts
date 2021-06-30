import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'ngprime-core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {

  constructor(private authSvc: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // valido la ruta activa 
    console.log('valido ruta activa');
    if (this.authSvc.isActiveRoute(state.url)) {
      // valido la vida del token
      console.log('valido token');
      if (this.authSvc.validateToken()) {
        // valido si tiene permisos de pantallas
        console.log('valido permiso pantalla');
        if (this.authSvc.isAccessScreen(state.url)) {
          return true;
        } else {
          this.router.navigateByUrl('/private/no-autorizado');
          return true;
        }
      }else{
        console.log('me quedo estancado aqui');
        return true;
      }
    } else {
      console.log('no tengo ruta almacenada');
      this.authSvc.logout();
      return false;
    }
  }

}
