import { Controller, Service } from "@/infrastructure/interfaces";
import Router from "@/routes";
import { TYPES } from "@/infrastructure/types";
import { Router as IRouter } from "express";
import { ContainerModule, interfaces } from "inversify";
import { Model } from "mongoose";
import { User } from "@/models/user.model";
import RiddleService from "@/services/riddle.service";
import { RiddleController } from "@/controllers/riddle.controller";

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
  }
);
