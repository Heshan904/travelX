import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TokenStorage } from '../../core/services/token-storage';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private tokenStore: TokenStorage){}

  logout(){
    localStorage.removeItem('token');
    alert('You have been logged out.');
    window.location.reload();
  }

  myAccount(){
    if(this.tokenStore.getRole()==='admin'){
      window.location.href = '/admin';
    } else {
      window.location.href = '/my-account';
    }
  }


}
