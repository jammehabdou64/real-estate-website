import { User } from "@/Model/User";
import { stat } from "fs";
import { bcrypt } from "jcc-express-mvc";
import { FormRequest } from "jcc-express-mvc/core/FormRequest";
import { Request } from "jcc-express-mvc/core/http";

export class UserRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.validate({
      name: ["required"],
      email: ["required", `${!this.route("user") ? "unique:users" : "next"}`],
      phone: ["required", `${!this.route("user") ? "unique:users" : "next"}`],
      address: ["required"],
      status: ["nullable"],
    });
  }

  async save() {
    await this.rules();

    const { name, email, phone, address, status } = this.request();

    const user: any = this.route("user")
      ? await User.find(this.route("user"))
      : new User();

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.address = address;
    user.status = status || "2";
    user.password = await bcrypt("password");
    user.role = 5;

    return user.save();
  }
}
