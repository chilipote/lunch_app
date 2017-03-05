import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  signInWithGmail(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }
  signInWithEmail(mail,pwd): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login(
      { email: mail, password: pwd },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
    }

  signOut(): void {
    this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.facebook.displayName;
    } else {
      return '';
    }
  }
}
