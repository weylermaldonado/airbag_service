import { RiddleDTO } from "@/infrastructure/dto/riddle.dto";
import { Controller, Service } from "@/infrastructure/interfaces";
import { RequestRiddle } from "@/infrastructure/request/riddle.request";
import { BaseResponse } from "@/infrastructure/response/base.response";
import { TYPES } from "@/infrastructure/types";
import { NextFunction, Request, Response } from "express";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";

@provide(TYPES.Controller)
export class RiddleController implements Controller {
  constructor(@inject(TYPES.Service) private readonly riddleService: Service) {}

  async execute(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      // Validate request
      const { body } = req;
      const request = RequestRiddle.validate(body);
      if (!request.success) {
        console.error(
          `[${RiddleController.name}] ==> Error: ${JSON.stringify(
            request.details
          )}`
        );
        const response = BaseResponse.unprocessableEntity({
          message: request.details,
        });
        return res.send(response);
      }

      // Map request to DTO
      const riddle = RiddleDTO.mapFrom(request.value.requestData);

      // Call the service
      const result = this.riddleService.execute(riddle);

      // Return the result
      const response = BaseResponse.ok(result);
      return res.send(response);
    } catch (error: any) {
      console.error(
        `[${RiddleController.name}] ==> Error: ${JSON.stringify(error)}`
      );
      next(error);
    }
  }
}
