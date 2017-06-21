import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { EditProfilePage } from "../edit-profile/edit-profile";

export class Profile {
    public maxHumidity: number;
    public minHumidity: number;
    public minLuminosity: number;
    public name: string;
}

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

  addProfile() {
    this.profiles.push(this.newProfile).then(() => {
      this.newProfile = new Profile();
    })
  }
  
  editProfile(id: string) {
    this.modal.create(EditProfilePage, {id: id}).present();
  }

  deleteProfile(id: string){
    this.afd.object('/profiles/' + id).remove();
  }

}
