import { Component, Input, OnInit } from '@angular/core';
import { Profile } from "../../models/profile";
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

  @Input() vase: any;

  constructor(private afd: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.profiles = this.afd.list('/profiles');
    this.afd.object('/profiles/' + this.vase.profile_key).subscribe(profile => {
      this.vase.profile = profile;
    })
  }

  updateCurrentProfile() {
    this.afd.object('/vases/' + this.vase.$key).update(this.vase);
  }

}
