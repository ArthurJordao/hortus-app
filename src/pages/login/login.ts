import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private angularFireAuth: AngularFireAuth) {  }

  login() {
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
  }

}
