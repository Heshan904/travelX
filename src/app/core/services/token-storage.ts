import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenStorage {
  getToken(){
    return localStorage.getItem('token');
  }

  getRole(){
    const token = this.getToken();
    if(!token) return null;
    const decodedToken:any = jwtDecode(token);
    return decodedToken['role'];
  }

  getHeaders(){
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return headers;
  }
  
  getUserId(){
    const token = this.getToken();
    if(!token) return null;
    const decodedToken:any = jwtDecode(token);
    console.log(decodedToken['id']);
    return decodedToken['id'];
  }
}
