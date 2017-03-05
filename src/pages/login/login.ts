import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

import { LocalStorageModule } from 'angular-2-local-storage';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

interface User {
  email: string;
  password: string;
}


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: User<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = {};
    // private this.localStorageService: LocalStorageService;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegisterPage() {
    this.navCtrl.setRoot(RegisterPage);
  }
}
