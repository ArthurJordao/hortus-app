/**
 * Created by arthur on 08/06/17.
 */
import { Profile } from "./profile";

export class Vase {
  public id: string;
  public humidity: number;
  public luminosity: number;
  public temperature: number;
  public profile: Profile;
  public profile_key: string;
}
