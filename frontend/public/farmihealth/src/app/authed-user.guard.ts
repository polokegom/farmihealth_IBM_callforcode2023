import { CanActivateFn } from '@angular/router';

export const authedUserGuard: CanActivateFn = (route, state) => {
  return true;
};
