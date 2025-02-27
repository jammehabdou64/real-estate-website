import { Company } from "@/Model/Company";
import { CompanyRequest } from "@/Request/CompanyRequest";
import { Request, Response, Next } from "jcc-express-mvc/core/http";

export class CompaniesController {
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

    // return res.json({ msg: await Company.paginate(req, 10) });
    return res.inertia("Admin/Companies/Index", {
      companies: await Company.paginate(req, 10),
    });
    // console.log("object");
    // return res.json({ message: "Companies Index" });
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
