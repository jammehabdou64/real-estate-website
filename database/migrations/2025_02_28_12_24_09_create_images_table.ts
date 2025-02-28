import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("images", (table) => {
      table.id();
      table.string("url");
      table.morphs("imageable");
      table.timestamps();
      table.softDeletes();
    });
  }

  down() {
    return Schema.dropTable("images");
  }
}
