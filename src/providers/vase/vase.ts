import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Vase} from "../../models/vase";
import { Profile } from "../../models/profile";

/*
  Generated class for the VaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class VaseProvider {

  constructor() {
    this.vases = [];
    let profile: Profile = new Profile(1);
    this.vases.push(new Vase(1, 35, 33, 23, profile));
    this.vases.push(new Vase(2, 40, 44, 24, new Profile(2)));
    this.vases.push(new Vase(3, 23, 55, 25, profile));
  }
  private vases: Vase[];

  public getVases() {
    return this.vases;
  }

}
