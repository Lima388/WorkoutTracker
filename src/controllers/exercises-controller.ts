import { Request, Response } from "express";
import exerciseRpository from "../repositories/exercise-repository.js";
import { Exercise } from "../protocols/exercise.js";

async function listAll (req: Request, res: Response): Promise<Response<Exercise[],Record<string,number>>> {
  const result = await exerciseRpository.selectAll();
  return res.send(result.rows); 
}

export {
  listAll
}