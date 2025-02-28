import { Company } from "@/Model/Company";
import { CompanyRequest } from "@/Request/CompanyRequest";
import { UserRepository } from "app/Repositories/UserRepository";
import { Request, Response, Next } from "jcc-express-mvc/core/http";
import { Inject } from "jcc-express-mvc/lib/Dependancy";

@Inject()
export class CompaniesController {
  constructor(private user: UserRepository) {}

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

    return res.inertia("Admin/Companies/Index", {
      companies: await Company.latest().paginate(req, 10),
      users: await this.user.chunck(),
    });
  }

  /**
   *
   *@access public
   * @return Express Request Response
   */
  async store(req: Request, res: Response, next: Next) {
    //

    const companyRequest = new CompanyRequest(req);
    const saved = await companyRequest.save();

    if (saved) {
      res.inertiaRedirect("/admin/companies", "company added successfully");
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
    const companyRequest = new CompanyRequest(req);
    const saved = await companyRequest.save();
    if (saved) {
      res.inertiaRedirect("/admin/companies", "company updated successfully");
    }
  }

  /**
   *@access public
   * @param  {id} - string
   * @return Express Response
   */
  async destroy(req: Request, res: Response, next: Next) {
    //

    if (await Company.delete(req.params.company)) {
      res.inertiaRedirect("/admin/companies", "company deleted successfully");
    }
  }
}
