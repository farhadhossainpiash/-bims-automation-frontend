import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './_services/auth.service'; // Adjust the import based on your project structure

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']); // Redirect to login if not authenticated
    return false; // Prevent access
  }
  return true; // Allow access
};
