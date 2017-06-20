/**
 * Created by arthur on 08/06/17.
 */
import { Profile } from "../pages/profiles/profiles";

export class Vase {
  constructor(public id: any, public humidity: number, public luminosity: number, public temperature: number,
              public profile: Profile) {
  }
}
