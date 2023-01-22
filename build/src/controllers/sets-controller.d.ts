import { Request, Response } from "express";
import { Set } from "../protocols/set.js";
declare function listAll(req: Request, res: Response): Promise<Response<Set[], Record<string, number>>>;
declare function create(req: Request, res: Response): Promise<Response<Set[], Record<string, number>>>;
declare function update(req: Request, res: Response): Promise<Response<Set[], Record<string, number>>>;
export { listAll, create, update };
