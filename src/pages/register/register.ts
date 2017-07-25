import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from "../login/login";
import { TabsPage } from "../tabs/tabs";

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
    private angularFireAuth: AngularFireAuth, private toast: ToastController) {
  }

  loginPage() {
    this.navCtrl.push(LoginPage);
  }

  createUser() {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then(() => {
      this.toast.create({
        message: "Cadastrado com sucesso!",
        duration: 300
      }).present();
      this.navCtrl.setRoot(TabsPage);
    })
    .catch(() => {
      this.toast.create({
        message: "Email já cadastrado",
        duration: 3000
      }).present();
      this.user = new User();
      this.confirmPassword = "";
    })
  }
}
