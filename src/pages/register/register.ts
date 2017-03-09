import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';


import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

import { User } from '../../models/user';


/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _auth: AuthService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

  onLogInSuccess() {
    this.navCtrl.setRoot(TabsPage);
  }

  onLogInError(error) {
    let alert = this.alertCtrl.create({
      title: 'Register failed',
      subTitle: error.message || 'Please verify your informations',
      buttons: ['OK']
    });
    alert.present();
  }

  registerUser() {
    this._auth.registerUser(this.user.email, this.user.password)
      .then(this.onLogInSuccess.bind(this))
      .catch((error) => {
        return this.onLogInError(error);
      });
  }
}
