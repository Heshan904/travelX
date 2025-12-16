import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { TokenStorage } from '../services/token-storage';
import { jwtDecode } from 'jwt-decode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AdminGuard implements CanActivate{
  constructor(private tokenStorage: TokenStorage, private router: Router){}

  canActivate(): boolean {
    const token:any = localStorage.getItem('token');
    const decodedToken:any = jwtDecode(token);
    const role = decodedToken['role'];

    if(role === 'admin'){
      return true;
    }else{
      alert('You do not have permission to access this page.');
      this.router.navigate(['/home']);
      return false;
    }
  }
}