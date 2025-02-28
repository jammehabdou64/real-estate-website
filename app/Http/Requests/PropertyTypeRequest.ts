import { PropertyType } from "@/Model/PropertyType";
import { FormRequest } from "jcc-express-mvc/core/FormRequest";
import { Request } from "jcc-express-mvc/core/http";

export class PropertyTypeRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.validate({
      //
      name: [
        "required",
        `${this.route("propertyType") ? "next" : "unique:propertyType"}`,
      ],

      description: ["nullable"],
    });
  }

  async save() {
    await this.rules();
    const { name, description } = this.request();
    const propertyType: any = this.route("propertyType")
      ? await PropertyType.find(this.route("propertyType"))
      : new PropertyType();

    propertyType.name = name;
    propertyType.description = description;
    return propertyType.save();
  }
}
