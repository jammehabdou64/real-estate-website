import { Request, Response, Next } from "jcc-express-mvc/core/http";

export class AgentsController {
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
    return res.inertia("Admin/Agents/Index", { users: [] });
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
