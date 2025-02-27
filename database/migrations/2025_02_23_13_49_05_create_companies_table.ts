import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("companies", (table) => {
      table.id();
      table.string("name").unique();
      table.string("email").unique();
      table.unsignedBigInteger("user_id");
      table.string("primary_phone").unique();
      table.string("secondary_phone").nullable();
      table.string("location");
      table.string("slug").unique().nullable();
      table.string("logo").nullable();
      table.string("website").nullable();
      table.string("description").nullable();
      table.string("status").default("2");
      table.foreign("user_id").references("id").on("users");
      table.timestamps();
      table.softDeletes();
    });
  }

  down() {
    return Schema.dropTable("companies");
  }
}
