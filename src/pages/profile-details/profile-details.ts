import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Profile } from "../profiles/profiles";

/**
 * Generated class for the ProfileDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {

  profile: Profile;
  ref: FirebaseObjectObservable<any>;
  id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCrtl: ViewController, public afd: AngularFireDatabase) {
    this.id = this.navParams.get('id');
    this.ref = this.afd.object('/profiles/' + this.id);
    this.ref.subscribe(profile => {
      this.profile = profile
    });
  }

  fechar() {
    this.viewCrtl.dismiss();
  }

}
