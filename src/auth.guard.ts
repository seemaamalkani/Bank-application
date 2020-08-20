import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserdataService } from './userdata.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(public protect: UserdataService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('logout', this.protect.onLogout());
      console.log("2",this.protect.onLogout())
      return this.protect.onLogout();
  }
}
