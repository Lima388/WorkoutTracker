import { Request, Response } from "express";
import exerciseRpository from "../repositories/exercise-repository.js";
import { Exercise } from "../protocols/exercise.js";

async function listAll (req: Request, res: Response): Promise<Response<Exercise[],Record<string,number>>> {
  try{
    const result = await exerciseRpository.selectAll();
  return res.send(result.rows); 
  }catch(error){
    console.log(error);
    return res.sendStatus(500);
  }
  
}

async function create(req: Request, res: Response): Promise<Response<string,Record<string,number>>>{
  try{
    const name: string = req.body.name;
    await exerciseRpository.insert(name);
    return res.sendStatus(200);
  }catch(error){
    console.log(error);
    return res.sendStatus(500);
  }
 
}

export {
  listAll,
  create
}