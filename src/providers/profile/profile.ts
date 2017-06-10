import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Profile } from "../../models/profile";

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileProvider {
  maxId: 1;
  profiles: Profile[];

  constructor() {
    this.profiles = [new Profile(1, 80, 50, 30, 'alface')];
  }

  public getProfiles(): Profile[] {
    return this.profiles;
  }

  public getProfileById(id): Profile {
    return this.profiles.find(profile => profile.id == id)
  }

  public addProfile(profile: Profile) {
    profile.id=++this.maxId;
    this.profiles.push(profile);
  }

}
