import { Component } from '@angular/core';

import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the AuthProvider component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'auth-provider',
  templateUrl: 'auth-provider.html'
})
export class AuthProviderComponent {

  constructor(af: AngularFire,private _auth: AuthService) {}

  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  signInWithGmail(): void {
    this._auth.signInWithGmail()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this._auth);
  }
}
