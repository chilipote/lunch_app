import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

import { LocalStorageModule } from 'angular-2-local-storage';
import { User } from '../../models/user';
import { AuthService } from '../../providers/auth-service';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _auth: AuthService
  ) {  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegisterPage() {
    this.navCtrl.setRoot(RegisterPage);
  }

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

  signInWithEmail() {
   this._auth.signInWithEmail(this.user.email,this.user.password)
     .then(this.onLogInSuccess.bind(this))
     .catch(this.onLogInError.bind(this));
   }
}
