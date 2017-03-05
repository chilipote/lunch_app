import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';



import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  user: <any> ;


  constructor(public navCtrl: NavController,af: AngularFire,private _auth: AuthService,  public navParams: NavParams) {
    this.user = {};
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegisterPage() {
    this.navCtrl.setRoot(RegisterPage);
  }


  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }
  signInWithGoogle(): void {
    this._auth.signInWithGmail()
      .then(() => this.onSignInSuccess());
  }
  signInWithEmail(): void {

    this._auth.signInWithEmail(this.user.email,this.user.password)
      .then(this.onSignInSuccess())
      .catch((error) => {
        console.log("Firebase failure: " + JSON.stringify(error));
      });
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this._auth);
  }


}
