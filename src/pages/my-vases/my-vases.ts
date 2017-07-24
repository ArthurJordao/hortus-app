import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { RegisterPage } from "../register/register";

@Component({
  selector: 'my-vases',
  templateUrl: 'my-vases.html'
})
export class MyVasesPage {
  vases: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public afd: AngularFireDatabase,
              private modal: ModalController) {
    this.vases = afd.list('/vases');
  }

  createUser() {
    this.modal.create(RegisterPage).present();
  }

}
