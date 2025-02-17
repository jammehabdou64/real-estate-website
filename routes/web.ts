import { UsersController } from "@Controllers/UsersController";
import { Auth } from "jcc-express-mvc/";
import { Route } from "jcc-express-mvc/Route";

Route.get("/", (req, res) => {
  // console.log(process.memoryUsage());

  return res.inertia("Home", {
    users: [{ name: "Andou" }, { name: "Amadou" }, { name: "Lamin" }],
  });
});
