import { Company } from "@/Model/Company";
import { FormRequest } from "jcc-express-mvc/core/FormRequest";
import { Request } from "jcc-express-mvc/core/http";

export class CompanyRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.validate({
      //
      name: [
        "required",
        `${this.route("company") ? "next" : "unique:company"}`,
      ],
      user_id: ["required"],
      email: [
        "required",
        "email",
        `${this.route("company") ? "next" : "unique:company"}`,
      ],
      primary_phone: ["required"],
      secondary_phone: ["nullable"],
      location: ["nullable"],
      website: ["nullable"],
      logo: ["nullable"],
      description: ["nullable"],
      status: ["nullable"],
    });
  }

  async save() {
    await this.rules();

    const {
      name,
      email,
      primary_phone,
      secondary_phone,
      description,
      user_id,
      location,
      website,
    } = this.request();
    // let imagePath = "";
    // if (this.hasFile("logo")) {
    //   imagePath = this.file("logo").store("images/logos");
    // }

    const company: any = this.route("company")
      ? await Company.find(this.route("company"))
      : new Company();
    company.name = name;
    company.user_id = user_id;
    company.email = email;
    company.primary_phone = primary_phone;
    company.secondary_phone = secondary_phone;
    company.description = description;
    company.status = "2";
    company.location = location;
    // company.logo = imagePath || company.logo;
    company.website = website;

    return company.save();
  }
}
