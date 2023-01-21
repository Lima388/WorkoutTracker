import { Request, Response } from "express";
declare function listAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function listOne(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export { listAll, listOne };
