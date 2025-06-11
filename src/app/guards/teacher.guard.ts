import { CanActivateFn } from '@angular/router';
import { UserRole } from '../enums/user-role';

export const teacherGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('userRole');
  if (role === UserRole.GYMTEACHER.toString()) {
    return true;
  }
  return false;
};
