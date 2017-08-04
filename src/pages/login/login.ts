import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";
import { TabsPage } from "../tabs/tabs";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

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
  loginForm: FormGroup;

  private user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private angularFireAuth: AngularFireAuth, private toast: ToastController,
              private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    })
  }

  login() {
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(() => {
        this.navCtrl.setRoot(TabsPage);
        this.toast.create({
          message: "Logado com sucesso!",
          duration: 3000
        }).present();
      })
      .catch(() => {
        this.toast.create({
          message: "Email ou login errado",
          duration: 3000
        }).present();
        this.user.password = "";
      });
    
  }

}
