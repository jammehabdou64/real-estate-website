import { AgentsController } from "@Controllers/AgentsController";
import { CompaniesController } from "@Controllers/CompaniesController";
import { PropertiesController } from "@Controllers/PropertiesController";
import { PropertyTpesController } from "@Controllers/PropertyTpesController";
import { UsersController } from "@Controllers/UsersController";
import { Route } from "jcc-express-mvc/Route";

Route.prefix("/admin").group((Route) => {
  //
  Route.get("/dashboard", (req, res) => {
    return res.inertia("Admin/Dashboard", {
      users: [{ name: "Andou" }, { name: "Amadou" }, { name: "Lamin" }],
    });
  });

  //.controller(CompaniesController)

  Route.group((Route) => {
    Route.get("/companies", [CompaniesController, "index"]);
    Route.get("/companies/create", [CompaniesController, "create"]);
    Route.post("/companies", [CompaniesController, "store"]);
    Route.get("/companies/{company}/edit", [CompaniesController, "edit"]);
    Route.patch("/companies/{company}", [CompaniesController, "update"]);
    Route.delete("/companies/{company}", [CompaniesController, "destroy"]);
  });

  Route.group((Route) => {
    Route.get("/users", [UsersController, "index"]);
    // Route.get("/users/create", [UsersController, "create"]);
    Route.post("/users", [UsersController, "store"]);
    // Route.get("/users/{user}/edit", [UsersController, "edit"]);
    Route.patch("/users/{user}", [UsersController, "update"]);
    Route.delete("/users/{user}", [UsersController, "destroy"]);
  });

  //
  Route.group((Route) => {
    Route.get("/property-types", [PropertyTpesController, "index"]);
    Route.get("/property-types/create", [PropertyTpesController, "create"]);
    Route.post("/property-types", [PropertyTpesController, "store"]);
    Route.get("/property-types/{propertyType}/edit", [
      PropertyTpesController,
      "edit",
    ]);
    Route.patch("/property-types/{propertyType}", [
      PropertyTpesController,
      "update",
    ]);
    Route.delete("/property-types/{propertyType}", [
      PropertyTpesController,
      "destroy",
    ]);
  });

  //
  Route.group((Route) => {
    Route.get("/properties", [PropertiesController, "index"]);
    Route.get("/properties/create", [PropertiesController, "create"]);
    Route.post("/properties", [PropertiesController, "store"]);
    Route.get("/properties/{company}/edit", [PropertiesController, "edit"]);
    Route.put("/properties/{company}", [PropertiesController, "update"]);
    Route.delete("/properties/{company}", [PropertiesController, "destroy"]);
  });

  //
  Route.group((Route) => {
    Route.get("/agents", [AgentsController, "index"]);
    Route.get("/agents/create", [AgentsController, "create"]);
    Route.post("/agents", [AgentsController, "store"]);
    Route.get("/agents/{agent}/edit", [AgentsController, "edit"]);
    Route.put("/agents/{agent}", [AgentsController, "update"]);
    Route.delete("/agents/{agent}", [AgentsController, "destroy"]);
  });

  //
  //   Route.controller(CompaniesController).group((Route) => {
  //     Route.get("/companies", "index");
  //     Route.get("/companies/create", "create");
  //     Route.post("/companies", ["store"]);
  //     Route.get("/companies/{company}/edit", ["edit"]);
  //     Route.put("/companies/{company}", [,"update"]);
  //     Route.delete("/{company}", [,"destroy"]);
  //   });
});
