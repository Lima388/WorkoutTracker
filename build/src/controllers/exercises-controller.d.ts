import { Request, Response } from "express";
import { Exercise } from "../protocols/exercise.js";
declare function listAll(req: Request, res: Response): Promise<Response<Exercise[], Record<string, number>>>;
export { listAll };
