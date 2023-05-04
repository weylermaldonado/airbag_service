import { RiddleDTO } from "@/infrastructure/dto/riddle.dto";
import { Riddle } from "@/infrastructure/interfaces";
import { TYPES } from "@/infrastructure/types";
import { inject, injectable } from "inversify";

@injectable()
class RiddleService {
  constructor(
    @inject(TYPES.BlackJackRiddle) private readonly blackJackRiddle: Riddle,
    @inject(TYPES.CesarCipherRiddle) private readonly cesarCipherRiddle: Riddle,
    @inject(TYPES.ClearNumbersRiddle)
    private readonly clearNumbersRiddle: Riddle
  ) {}

  execute(riddle: RiddleDTO): Object {
    switch (riddle.getName().toLowerCase()) {
      case "blackjack":
        this.blackJackRiddle.validateInput(riddle.getInput());
        return { result: this.blackJackRiddle.run(riddle.getInput()) };
      case "shiftcipher":
        this.cesarCipherRiddle.validateInput(riddle.getInput());
        return { result: this.cesarCipherRiddle.run(riddle.getInput()) };
      case "clearduplicates":
        this.clearNumbersRiddle.validateInput(riddle.getInput());
        return { result: this.clearNumbersRiddle.run(riddle.getInput()) };
      default:
        throw new Error("Riddle not found.");
    }
  }
}
export default RiddleService;
