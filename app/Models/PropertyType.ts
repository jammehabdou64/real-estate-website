import { Model } from "jcc-eloquent";

export class PropertyType extends Model {
  //

  protected static casts = {
    created_at: "date",
  };
}
