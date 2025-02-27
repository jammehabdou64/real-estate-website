import { Model } from "jcc-eloquent";
import { Str } from "jcc-express-mvc/core/Str";

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

  static booted(): void {
    this.saving((user) => {
      user.slug = Str.slug(user.name || "");
    });
  }
}
