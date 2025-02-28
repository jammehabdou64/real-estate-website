import { Model } from "jcc-eloquent";

export class Image extends Model {
  //

  public images() {
    return this.morphyTo();
  }
}
