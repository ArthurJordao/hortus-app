import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileProvider } from "../../providers/profile/profile";
import { Profile } from "../../models/profile";

@Component({
  selector: 'profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {
  newProfile: Profile;
  profiles: Profile[];
  showForm: boolean;

  constructor(public navCtrl: NavController, private profileProvider: ProfileProvider) {
    this.profiles = profileProvider.getProfiles();
    this.newProfile = new Profile();
  }

  addProfile() {
    this.profileProvider.addProfile(this.newProfile);
    this.newProfile = new Profile();
  }

}
