import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Browse page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/



@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {

  users: FirebaseListObservable<any> ;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire){
    this.users = af.database.list('/users');
  }


  addUser(){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Enter a name for this new song you're so keen on adding",
    inputs: [
      {
        name: 'name',
        placeholder: 'First and last name'
      },
      {
        name: 'job',
        placeholder: 'job position'
      },
      {
        name: 'description',
        placeholder: 'description'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.users.push({
            name: data.name,
            job: data.job,
            description: data.description,
          });
        }
      }
    ]
  });
  prompt.present();
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

}
