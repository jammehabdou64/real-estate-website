import { UsersController } from "@Controllers/UsersController";
import { ApiRoute } from "jcc-express-mvc/Route";

ApiRoute.prefix("/users")
  .controller(UsersController)
  .group((Route) => {
    Route.get("/", "index");
  });
