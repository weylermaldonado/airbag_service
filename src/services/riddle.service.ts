import { RiddleDTO } from "@/infrastructure/dto/riddle.dto";
import { Service } from "@/infrastructure/interfaces";
import { TYPES } from "@/infrastructure/types";
import { inject, injectable } from "inversify";
import BaseService from "./base.service";

@injectable()
class RiddleService extends BaseService {
  constructor() {
    super();
  }

  async execute(riddle: RiddleDTO): Promise<any> {
    return { message: "hello from service" };
  }
}
export default RiddleService;
