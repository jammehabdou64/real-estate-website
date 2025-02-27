import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("users", (table) => {
      table.id();
      table.string("name");
      table.string("email").unique();
      table.string("password");
      table.string("address").nullable();
      table.string("phone");
      table.string("slug").unique().nullable();
      table.string("email_verified").nullable();
      table.string("avatar").nullable();
      table.string("role").default("2").nullable();
      table.string("status").default("2").nullable();
      table.timestamps();
      table.softDeletes();
    });
  }
  down() {
    return Schema.dropTable("users");
  }
}
