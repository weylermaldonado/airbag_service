import {
  Controller,
  Repository,
  Riddle,
  Service,
} from "@/infrastructure/interfaces";
import Router from "@/routes";
import { TYPES } from "@/infrastructure/types";
import { Router as IRouter } from "express";
import { ContainerModule, interfaces } from "inversify";
import { Model } from "mongoose";
import { Request } from "@/models/request.model";
import RiddleService from "@/services/riddle.service";
import { RiddleController } from "@/controllers/riddle.controller";
import { BlackJackRiddle } from "@/services/blackjack.riddle";
import { CesarCipherRiddle } from "@/services/cesarcipher.riddle";
import { ClearNumbersRiddle } from "@/services/clearnumbers.riddle";
import { RequestRepository } from "@/repositories/request.repository";

export const RiddleContainerModule = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<IRouter>(TYPES.Router).toDynamicValue(
      (context: interfaces.Context): IRouter => {
        return Router(
          context.container.get<RiddleController>(TYPES.RiddleController)
        );
      }
    );
    bind<Controller>(TYPES.RiddleController)
      .to(RiddleController)
      .inSingletonScope();
    bind<Service>(TYPES.Service).to(RiddleService).inSingletonScope();
    bind<Riddle>(TYPES.BlackJackRiddle).to(BlackJackRiddle).inSingletonScope();
    bind<Riddle>(TYPES.CesarCipherRiddle)
      .to(CesarCipherRiddle)
      .inSingletonScope();
    bind<Riddle>(TYPES.ClearNumbersRiddle)
      .to(ClearNumbersRiddle)
      .inSingletonScope();
    bind<Model<any>>(TYPES.Request).toConstantValue(Request);
    bind<Repository>(TYPES.RequestRepository)
      .to(RequestRepository)
      .inSingletonScope();
  }
);
