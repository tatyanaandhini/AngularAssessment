import { DOCUMENT } from '@angular/common';
import { Inject, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {
      id: 1,
      name: 'AdminA',
      username: 'adminA',
      password: 'Password123!'
    },
    {
      id: 2,
      name: 'AdminB',
      username: 'adminB',
      password: 'Password123!'
    }
  ];

  currentlyLoggedIn: any;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      let currentlyLoggedIn: any = localStorage.getItem('currentlyLoggedIn');
      if (currentlyLoggedIn) {
        currentlyLoggedIn = JSON.parse(currentlyLoggedIn);
      }
  
      this.currentlyLoggedIn = currentlyLoggedIn; 
    }
   }

  login(uname: string, pass: string) {
    let loggedInUser = this.users.find(x => x.username === uname && x.password === pass);
    if (loggedInUser) {
      this.currentlyLoggedIn = loggedInUser;
      localStorage.setItem('currentlyLoggedIn', JSON.stringify(this.currentlyLoggedIn));
      this.router.navigateByUrl('/employee/list')
    } else {
      alert('Username atau Password tidak sesuai.')
    }

    return loggedInUser;
  }

  logout() {
    this.currentlyLoggedIn = undefined;
    localStorage.removeItem('currentlyLoggedIn');
    this.router.navigateByUrl('/');
  }
}
