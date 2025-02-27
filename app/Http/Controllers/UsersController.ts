import { bcrypt, Auth } from "jcc-express-mvc";
import { Request, Response, Next } from "jcc-express-mvc/core/http";
import { User } from "@/Model/User";
import { Inject } from "jcc-express-mvc/lib/Dependancy";
import { UserRepository } from "app/Repositories/UserRepository";

@Inject()
export class UsersController {
  //

  constructor(private user: UserRepository) {}

  async index(req: Request, res: Response, next: Next) {
    return res.inertia("Admin/Users/Index", { users: [] });
  }

  //

  async store(req: Request, res: Response, next: Next) {
    await req.validate({
      name: ["required"],
      email: ["required", "unique:users"],
      password: ["required", "min:6"],
    });

    const save = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt(req.body.password),
      primary_phone: "7501035",
    });

    return save
      ? Auth.attempt(req, res, next)
      : res.json({ message: "Invalid credentials" });
  }

  //

  async show(req: Request, res: Response, next: Next) {
    return res.json({
      message: await User.find(req.params.id),
    });
  }
}
