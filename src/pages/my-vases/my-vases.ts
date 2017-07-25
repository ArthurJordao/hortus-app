import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'my-vases',
  templateUrl: 'my-vases.html'
})
export class MyVasesPage {
  vases: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public afd: AngularFireDatabase) {
    this.vases = afd.list('/vases');
  }


}
