import { CanActivateFn } from '@angular/router';
import { UserRole } from '../enums/user-role';

export const secretaryGuard: CanActivateFn = (route, state) => {
 const role = localStorage.getItem('userRole');
  if (role === UserRole.SECRETARY.toString()) {
    return true;
  }
  return false;};
