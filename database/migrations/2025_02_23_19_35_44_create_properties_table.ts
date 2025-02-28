import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("properties", (table) => {
      table.id();
      table.unsignedBigInteger("user_id").nullable();
      table.unsignedBigInteger("company_id");
      table.unsignedBigInteger("property_type_id");
      table.string("title");
      table.string("location");
      table.string("price");
      table.string("bedrooms").nullable();
      table.string("bathrooms").nullable();
      table.string("floor").nullable();
      table.string("land_size").nullable();
      table.string("building_name").nullable();
      table.tinyInteger("parking").nullable();
      table.date("year_built").nullable;
      table.string("average_rating").nullable;
      table.string("slug").unique().nullable();
      table.string("status").default("2");
      table.string("image").nullable();
      table.text("description").nullable();
      table.foreign("company_id").references("id").on("companies");
      table.foreign("property_type_id").references("id").on("property_types");
      table.timestamps();
      table.softDeletes();
    });
  }

  down() {
    return Schema.dropTable("properties");
  }
}
