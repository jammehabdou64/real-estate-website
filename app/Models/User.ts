import { Model } from "jcc-eloquent";

export class User extends Model {
  //
  public static STATUSES = { 2: "Active", 3: "Inactive" };
  public static ROLES = {
    2: "User",
    3: "Customer",
    4: "Agent",
    5: "Admin",
    6: "Super-Admin",
  };
}
