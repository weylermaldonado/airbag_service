import { BaseResponse } from "@/infrastructure/response/base.response";
import { NextFunction, Request, Response } from "express";

export default function ErrorMiddleware(
  err: BaseResponse,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const httpStatus = err.getStatusCode() || 500;
  return res.status(httpStatus).send(err.toPrimitive());
}
