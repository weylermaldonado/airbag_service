import { Request as RequestModel } from "@/models/request.model";
import { randomUUID } from "crypto";
import { NextFunction, Request, Response } from "express";

export default async function traceRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = {
    payload: {
      request_id: randomUUID(),
      body: JSON.stringify(req.body),
    },
  };
  await RequestModel.create(data);

  next();
}
