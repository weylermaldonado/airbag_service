import { RiddleDTO } from "@/infrastructure/dto/riddle.dto";
import { Riddle, Service } from "@/infrastructure/interfaces";
import { TYPES } from "@/infrastructure/types";
import { inject, injectable } from "inversify";

@injectable()
class RiddleService {
  constructor(@inject(TYPES.Riddle) private readonly blackJackRiddle: Riddle) {}

  execute(riddle: RiddleDTO): Object {
    switch (riddle.getName().toLowerCase()) {
      case "blackjack":
        this.blackJackRiddle.validateInput(riddle.getInput());
        return { result: this.blackJackRiddle.run(riddle.getInput()) };

      default:
        throw new Error("Riddle not found.");
    }
  }
}
export default RiddleService;
