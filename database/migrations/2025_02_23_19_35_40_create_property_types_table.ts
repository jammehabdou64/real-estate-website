import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("property_types", (table) => {
      table.id();
      table.string("name").unique();
      table.text("description").nullable();
      table.timestamps();
      table.softDeletes();
    });
  }

  down() {
    return Schema.dropTable("property_types");
  }
}
