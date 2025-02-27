import { Model } from "jcc-eloquent";

export class Company extends Model {
  //
  public static STATUSES = { "2": "Active", "3": "Inactive" };

  protected static casts = {
    getStatus: this.getStatus,
  };

  static getStatus(value: string) {
    return value == "2" ? "Active" : "Inactive";
  }

  static booted() {
    //
    this.saving((data) => {
      data["slug"] = `${data.name}`.replace(/\s/g, "-").trim().toLowerCase();
    });
  }
}
