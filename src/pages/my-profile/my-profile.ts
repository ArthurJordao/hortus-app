import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "firebase/app";

/**
 * Generated class for the MyProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private angularFireAuth: AngularFireAuth) {
  this.user = this.angularFireAuth.auth.currentUser;
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

}
