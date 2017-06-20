import { Component, Input, OnInit } from '@angular/core';
import {Vase} from "../../models/vase";
import { Profile } from "../../pages/profiles/profiles";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

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
  profiles: FirebaseListObservable<Profile[]>;

  @Input() vase: Vase;

  constructor(private afd: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.profiles = this.afd.list('/profiles');
    let profile: Profile = new Profile();
    this.vase.profile = profile;
  }

}
