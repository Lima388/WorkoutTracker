import { NextFunction, Request, Response } from "express";
export declare function setSchemaValidation(req: Request, res: Response, next: NextFunction): Promise<void | Response<number, Record<string, number>>>;
