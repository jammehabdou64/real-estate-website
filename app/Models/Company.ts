import { Model } from "jcc-eloquent";

export class Company extends Model {
  //
  public static STATUSES = { 2: "Active", 3: "Inactive" };
}
