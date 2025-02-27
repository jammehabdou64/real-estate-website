import { Request, Response, Next } from "jcc-express-mvc/core/http";
import { User } from "@/Model/User";
import { Inject } from "jcc-express-mvc/lib/Dependancy";
import { UserRepository } from "app/Repositories/UserRepository";
import { UserRequest } from "@/Request/UserRequest";

@Inject()
export class UsersController {
  //

  constructor(private user: UserRepository) {}

  async index(req: Request, res: Response, next: Next) {
    return res.inertia("Admin/Users/Index", {
      users: await this.user.paginate(req, 10),
    });
  }

  //

  async store(req: Request, res: Response, next: Next) {
    const userRequest = new UserRequest(req);
    const save = await userRequest.save();

    if (save) {
      return res.inertiaRedirect("/admin/users", "User added successfully");
    }
  }

  //

  async show(req: Request, res: Response, next: Next) {
    return res.json({
      message: await User.find(req.params.id),
    });
  }

  async update(req: Request, res: Response, next: Next) {
    const userRequest = new UserRequest(req);
    const save = await userRequest.save();

    if (save) {
      return res.inertiaRedirect("/admin/users", "User updated successfully");
    }
  }

  async destroy(req: Request, res: Response, next: Next) {
    const user = await this.user.delete(req.params.id);

    if (user) {
      return res.inertiaRedirect("/admin/users", "User deleted successfully");
    }
  }
}
