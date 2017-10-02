import { Component, Input, OnInit } from '@angular/core';
import { Profile } from "../../models/profile";
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { ModalController } from "ionic-angular";
import { VaseDetailsPage } from "../../pages/vase-details/vase-details";

/**
 * Generated class for the VaseCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'vase-card',
  templateUrl: 'vase-card.html'
})
export class VaseCardComponent implements OnInit {
  currentProfile: FirebaseObjectObservable<any>;
  profiles: FirebaseListObservable<Profile[]>;

  data: any;

  @Input() vase: any;

  constructor(private afd: AngularFireDatabase, public modal: ModalController) {
  }

  ngOnInit(): void {
    this.profiles = this.afd.list('/profiles');
    this.currentProfile = this.afd.object('/profiles/' + this.vase.profile_key);
  }

  updateCurrentProfile() {
    this.afd.object('/vases/' + this.vase.$key).update(this.vase);
  }


  details() {
    this.modal.create(VaseDetailsPage, {vase: this.vase}).present();
  }

  get vaseNumber() {
    return parseInt(this.vase.$key) + 1;
  }

}
