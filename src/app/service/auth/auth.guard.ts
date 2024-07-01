import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).currentlyLoggedIn) {
    return true;
  }

  (inject(Router)).navigateByUrl('/');
  alert('Masuk dengan Username dan Password untuk bisa mengakses halaman.')
  return false;
};
