import { Model } from "jcc-eloquent";

export class Property extends Model {
  //

  public imageable() {
    return this.morphyMany("image");
  }
}
