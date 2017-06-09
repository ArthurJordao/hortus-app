import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Vase} from "../../models/vase";

/*
  Generated class for the VaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class VaseProvider {

  constructor() {
    this.vases = [];
    this.vases.push(new Vase(1, 35, 33, 23, 80, 50, 30));
    this.vases.push(new Vase(2, 40, 44, 24, 75, 35, 35));
    this.vases.push(new Vase(3, 23, 55, 25, 40, 20, 30));
  }
  private vases: Vase[];

  public getVases() {
    return this.vases;
  }

  public modifyMinHumidity(vase: Vase, minHumidity: number) {
    vase.minHumidity = minHumidity;
  }

  public modifyMaxHumidity(vase: Vase, maxHumidity: number) {
    vase.maxHumidity = maxHumidity;
  }

  public modifyMinLuminosity(vase: Vase, minLuminosity: number) {
    vase.minLuminosity = minLuminosity;
  }

}
