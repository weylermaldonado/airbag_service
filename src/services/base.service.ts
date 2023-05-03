import { RiddleDTO } from "@/infrastructure/dto/riddle.dto";
import { Service } from "@/infrastructure/interfaces";
import { injectable } from "inversify";
@injectable()
class BaseService implements Service {
  constructor() {}

  async execute(riddle: RiddleDTO) {}
}
export default BaseService;
