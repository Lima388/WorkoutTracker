import { Request, Response } from "express";
import { Week } from "../protocols/week.js";
declare function listAllWithSets(req: Request, res: Response): Promise<Response<Week[], Record<string, number>>>;
declare function create(req: Request, res: Response): Promise<Response<string, Record<string, number>>>;
declare function remove(req: Request, res: Response): Promise<Response<string, Record<string, number>>>;
export { listAllWithSets, create, remove };
