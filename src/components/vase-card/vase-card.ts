import {Component, Input} from '@angular/core';
import {Vase} from "../../models/vase";

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
export class VaseCardComponent {

  @Input() vase: Vase

  constructor() {
  }

}
