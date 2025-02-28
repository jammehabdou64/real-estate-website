import { Image } from "@/Model/Image";
import { Property } from "@/Model/Property";
import { FormRequest } from "jcc-express-mvc/core/FormRequest";
import { Request } from "jcc-express-mvc/core/http";

export class PropertyRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.validate({
      //
      property_type_id: ["required"],
      title: ["required"],
      location: ["required"],
      price: ["required"],
      bedrooms: ["nullable"],
      bathrooms: ["nullable"],
      floor: ["nullable"],
      land_size: ["nullable"],
      building_name: ["nullable"],
      parking: ["nullable"],
      year_built: ["nullable"],
      average_rating: ["nullable"],
      status: ["nullable"],
      description: ["nullable"],
    });
  }

  async save() {
    await this.rules();

    const {
      property_type_id,
      title,
      location,
      price,
      bedrooms,
      bathrooms,
      floor,
      land_size,
      building_name,
      parking,
      year_built,
      average_rating,
      status,
      description,
    } = this.request();

    const property: any = this.route("property")
      ? await Property.find(this.route("property"))
      : new Property();

    property.property_type_id = property_type_id;
    property.title = title;
    property.location = location;
    property.price = price;
    property.bedrooms = bedrooms;
    property.bathrooms = bathrooms;
    property.floor = floor;
    property.land_size = land_size;
    property.building_name = building_name;
    property.parking = parking;
    property.year_built = year_built;
    property.average_rating = average_rating;
    property.status = status;
    property.description = description;
    const save = await property.save();
    if (this.hasFile("image")) {
      await Image.create({
        url: this.file("image").store("images/properties"),
        imageable_id: save.id,
        imageable_type: "Property",
      });
    }
    return save;
  }
}
