import { Component } from '@angular/core';

import { MyVasesPage } from "../my-vases/my-vases";
import { ProfilesPage } from "../profiles/profiles";
import { AngularFireAuth } from "angularfire2/auth";
import { NavController } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { MyProfilePage } from "../my-profile/my-profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyVasesPage;
  tab2Root = ProfilesPage;
  tab3Root = MyProfilePage;

  ionViewDidLoad() {
    this.angularFireAuth.authState.subscribe(user => {
      if (!user || !user.email || !user.uid) {
        this.navCtrl.setRoot(RegisterPage);
      }
    });
  
  }

  constructor(private angularFireAuth: AngularFireAuth, private navCtrl: NavController) {

  }
}
