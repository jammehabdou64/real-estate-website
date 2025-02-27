import { User } from "@/Model/User";
import { Request } from "jcc-express-mvc/core/http";

export class UserRepository {
  //

  async all() {
    return User.all();
  }

  async chunck() {
    return User.select("id", "name").get();
  }

  async paginate(req: Request, perpage: number) {
    return User.latest().paginate(req, perpage);
  }

  //

  async findBySlug(slug: string) {
    return User.where("slug", slug).first;
  }

  async delete(id: string) {
    return User.delete(id);
  }
}
