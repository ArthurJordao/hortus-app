import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: User = new User();
  confirmPassword: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private angularFireAuth: AngularFireAuth, private modal: ModalController) {
  }

  loginPage() {
    this.modal.create(LoginPage).present()
  }

  createUser() {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
  }
}
