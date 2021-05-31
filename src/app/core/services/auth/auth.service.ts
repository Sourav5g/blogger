import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app'
import 'firebase/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  employee: any;
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router
  ) {
    this.fireauth.authState.subscribe(user => {
      this.user = user;
    })
  }

  async loginWithGoogle() {
    await this.fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        this.employee =res.additionalUserInfo?.profile
        console.log(this.employee)
       

        localStorage.setItem('num', JSON.stringify('sourav'));
        //console.log(res)
        this.router.navigate(['/dashboard']);
      }).catch(err => {
        console.log('error')
      });
  }

}
