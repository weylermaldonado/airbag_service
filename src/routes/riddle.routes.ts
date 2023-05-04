import { Controller } from "@/infrastructure/interfaces";
import { Router } from "express";
import auth from "@/middlewares/jwt.middleware";
import traceRequest from "@/middlewares/trace.middleware";

export default function userRoutes(RiddleController: Controller) {
  const router = Router();

  router.post("", traceRequest, (...args) => RiddleController.execute(...args));
  router.get("", auth, (...args) => RiddleController.getInfo(...args));

  return router;
}
