import { Component } from '@angular/core';
import { AlertController, NavController} from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TabsPage } from '../../pages/tabs/tabs';


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

  constructor(
    af: AngularFire,
    private _auth: AuthService,
    private alertCtrl:AlertController,
    private navCtrl: NavController
  ) {}

  onLogInSuccess() {
    this.navCtrl.setRoot(TabsPage);
  }

  onLogInError() {
    let alert = this.alertCtrl.create({
      title: 'Authentification failed',
      subTitle: 'Please verify your email/password',
      buttons: ['OK']
    });
    alert.present();
  }

  signInWithTwitter(): void {
    this._auth.signInWithTwitter()
      .then(this.onLogInSuccess.bind(this))
      .catch(this.onLogInError.bind(this));
  }


  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(this.onLogInSuccess.bind(this))
      .catch(this.onLogInError.bind(this));
  }

  signInWithGmail(): void {
    this._auth.signInWithGmail()
      .then(this.onLogInSuccess.bind(this))
      .catch(this.onLogInError.bind(this));
  }
}
