import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { ProfileDetailsPage } from "../profile-details/profile-details";
import { Profile } from "../../models/profile";

@Component({
  selector: 'profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {
  newProfile: Profile;
  profiles: FirebaseListObservable<Profile[]>;
  showForm: boolean;

  constructor(public navCtrl: NavController, private afd: AngularFireDatabase,
              public modal: ModalController) {
    this.profiles = this.afd.list('/profiles');
    this.newProfile = new Profile();
  }

  detailsProfile(id: String) {
    this.modal.create(ProfileDetailsPage, {id: id}).present()
  }

  getImageUrl(profile: Profile): string {
    return "assets/img/" + profile.name.toLocaleLowerCase() + ".jpg";
  }

}
