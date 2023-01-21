import { Request, Response } from "express";
import setRepository from "../repositories/set-repository.js";
import { Set } from "../protocols/set.js";

async function listAll (req: Request, res: Response) {
  const result = await setRepository.selectAll();
  return res.send(result.rows); 
}

async function listOne(req: Request, res: Response){
  const id: number = req.body.id
  const result = await setRepository.selectById(id);
  return res.send(result.rows[0]);
}

export {
  listAll,
  listOne
}