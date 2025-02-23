import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("companies", (table) => {
      table.id();
      table.string("name");
      table.string("email").unique();
      table.string("primary_phone").unique();
      table.string("secondary_phone").nullable();
      table.string("location");
      table.string("slug").unique().nullable();
      table.string("status").default("2");
      table.timestamps();
      table.softDeletes();
    });
  }

  down() {
    return Schema.dropTable("companies");
  }
}
