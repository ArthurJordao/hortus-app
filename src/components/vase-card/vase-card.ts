import { Component, Input, OnInit } from '@angular/core';
import {Vase} from "../../models/vase";
import { ProfileProvider } from "../../providers/profile/profile";
import { Profile } from "../../models/profile";

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
  profiles: Profile[];

  @Input() vase: Vase;

  constructor(private profileProvide: ProfileProvider) {
  }

  ngOnInit(): void {
    this.vase.profile = this.profileProvide.getProfileById(this.vase.profile.id);
    this.profiles = this.profileProvide.getProfiles();
  }

}
