import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VaseProvider} from "../../providers/vase/vase";
import {Vase} from "../../models/vase";

@Component({
  selector: 'my-vases',
  templateUrl: 'my-vases.html'
})
export class MyVasesPage {
  vases: Vase[];

  constructor(public navCtrl: NavController, vaseProvider: VaseProvider) {
    this.vases = vaseProvider.getVases();
  }

}
