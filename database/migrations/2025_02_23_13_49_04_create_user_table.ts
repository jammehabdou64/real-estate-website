import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("users", (table) => {
      table.id();
      table.string("name");
      table.unsignedBigInteger("company_id").nullable();
      table.string("email").unique();
      table.string("password");
      table.string("location");
      table.string("phone");
      table.string("slug").unique().nullable();
      table.string("email_verified").nullable();
      table.string("avatar").nullable().default("avatar.png");
      table.string("role").default("2");
      table.string("status").default("2");
      table.timestamps();
      table.softDeletes();
    });
  }
  down() {
    return Schema.dropTable("users");
  }
}
