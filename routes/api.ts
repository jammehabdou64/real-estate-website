import { User } from "@/Model/User";
import { UsersController } from "@Controllers/UsersController";
import { ApiRoute } from "jcc-express-mvc/Route";

ApiRoute.get("/", async (req, res) => {
  return res.json({
    message: await User.all(),
  });
});
