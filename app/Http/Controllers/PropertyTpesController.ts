import { PropertyType } from "@/Model/PropertyType";
import { PropertyTypeRequest } from "@/Request/PropertyTypeRequest";
import { Request, Response, Next } from "jcc-express-mvc/core/http";

export class PropertyTpesController {
  /**
   *@access public
   * @return  Express Request Response
   */
  async create(req: Request, res: Response, next: Next) {
    //
  }
  /**
   *@access public
   * @return  Express Request Response
   */
  async index(req: Request, res: Response, next: Next) {
    //
    return res.inertia("Admin/Property-Types/Index", {
      propertyTypes: await PropertyType.latest().paginate(req, 10),
    });
  }

  /**
   *
   *@access public
   * @return Express Request Response
   */
  async store(req: Request, res: Response, next: Next) {
    //
    const propertyTypeRequest = new PropertyTypeRequest(req);
    const saved = await propertyTypeRequest.save();
    if (saved) {
      res.inertiaRedirect(
        "/admin/property-types",
        "Property Type added successfully",
      );
    }
  }

  /**
   *@access public
   *@param {id} - string
   * @return Express Request Response
   */
  async show(req: Request, res: Response, next: Next) {
    //
  }

  /**
   *
   *@access public
   * @param {id} - string
   * @return Express Request Response
   */
  async update(req: Request, res: Response, next: Next) {
    //

    const propertyTypeRequest = new PropertyTypeRequest(req);
    const saved = await propertyTypeRequest.save();
    if (saved) {
      res.inertiaRedirect(
        "/admin/property-types",
        "Property Type updated successfully",
      );
    }
  }

  /**
   *@access public
   * @param  {id} - string
   * @return Express Response
   */
  async destroy(req: Request, res: Response, next: Next) {
    //
    if (await PropertyType.delete(req.params.propertyType)) {
      return res.inertiaRedirect(
        "/admin/users",
        "Property Type deleted successfully",
      );
    }
  }
}
