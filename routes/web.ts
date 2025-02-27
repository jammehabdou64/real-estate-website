import { UsersController } from "@Controllers/UsersController";
import { Auth } from "jcc-express-mvc/";
import { Route } from "jcc-express-mvc/Route";

Route.get("/", (req, res) => {
  return res.inertia("Home", {
    users: [{ name: "Andou" }, { name: "Amadou" }, { name: "Lamin" }],
  });
});

// Route.get("/admin/dashboard", (req, res) => {
//   return res.inertia("Admin/Dashboard", {
//     users: [{ name: "Andou" }, { name: "Amadou" }, { name: "Lamin" }],
//   });
// });

// Route.get("/admin/companies", (req, res) => {
//   return res.inertia("Admin/Companies/Index", {
//     users: [{ name: "Andou" }, { name: "Amadou" }, { name: "Lamin" }],
//   });
// });
