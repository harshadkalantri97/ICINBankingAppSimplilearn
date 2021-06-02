import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthenticationService } from './authentication.service';
import { RegisrationService } from '../regisration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private authService: RegisrationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }

}
