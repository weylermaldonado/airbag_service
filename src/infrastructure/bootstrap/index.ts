import { AppContainer } from "@/infrastructure/startup/containers";
import { StartModule } from "@/index";
import { startExpress } from "@/infrastructure/framework/express.framework";
import { mongooseConnection } from "@/infrastructure/database/mongoose.database";
import { AppDependencies } from "@/infrastructure/d-injection/config";
import { RiddleContainerModule } from "@/infrastructure/Module";
import { TYPES } from "@/infrastructure/types";
import { Router } from "express";
import { JSONWebToken } from "../auth/jsonwebtoken.auth";
import { JWT_CONFIG } from "../config";

export class SharedBootstrap implements StartModule {
  async init(): Promise<void> {
    try {
      AppContainer.load(RiddleContainerModule);

      // database connection
      await mongooseConnection();

      // express server
      let router = AppContainer.get<Router>(TYPES.Router);
      await startExpress(router);

      // independency injection
      new AppDependencies().register(AppContainer);

      // Generate JWT
      const jwt = new JSONWebToken(JWT_CONFIG.secretKey);
      const token = await jwt.sign({ sub: "test" });
      console.info("================");
      console.info("Token generated", token);
      console.info("================");
    } catch (error: any) {
      console.error(
        `[${SharedBootstrap.name}] error starting module --> ${error}`
      );
    }
  }

  async initTest(): Promise<void> {
    try {
      // independency injection
      new AppDependencies().register(AppContainer);
    } catch (error) {
      console.error(
        `[${SharedBootstrap.name}] error starting module --> ${error}`
      );
    }
  }
}
