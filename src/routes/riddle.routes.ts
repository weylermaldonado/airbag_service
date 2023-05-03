import { Controller } from "@/infrastructure/interfaces";
import { Router } from "express";
export default function userRoutes(RiddleController: Controller) {
  const router = Router();

  router.post("", (...args) => RiddleController.execute(...args));

  return router;
}
