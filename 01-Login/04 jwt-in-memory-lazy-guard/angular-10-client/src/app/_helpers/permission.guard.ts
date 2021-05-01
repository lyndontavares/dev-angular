import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { NotifierService } from 'angular-notifier';

@Injectable({
    providedIn: 'root',
  })
export class PermissionGuard implements CanActivate {

    constructor(
      private router: Router,
      private tokenStorageService: TokenStorageService,
      private notifier: NotifierService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      // Estratégia de verificação:
      // A rota deve está contida no role do usuário.
      // (apenas didático. Não use em produção)
      const user = this.tokenStorageService.getUser();
      const roles = user.roles;
      const url = state.url.split('/')[1].toUpperCase()

      if (roles.toString().includes(url)) {
            return true
      } else {
        // Caso 1 - redireciona par login
        //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // Caso 2 - mostra aviso
        this.notifier.notify('error', 'Usuário não tem permissão!');
        return false;
      }
    }
}
