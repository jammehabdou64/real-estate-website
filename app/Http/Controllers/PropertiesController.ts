import { Property } from "@/Model/Property";
import { PropertyType } from "@/Model/PropertyType";
import { Request, Response, Next } from "jcc-express-mvc/core/http";

export class PropertiesController {
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
    return res.inertia("Admin/Properties/Index", {
      properties: await Property.latest().paginate(req, 15),
      propertyType: await PropertyType.all(),
    });
  }

  /**
   *
   *@access public
   * @return Express Request Response
   */
  async store(req: Request, res: Response, next: Next) {
    //
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
  }

  /**
   *@access public
   * @param  {id} - string
   * @return Express Response
   */
  async destroy(req: Request, res: Response, next: Next) {
    //
  }
}
