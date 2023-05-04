import { Riddle } from "@/infrastructure/interfaces";
import { injectable } from "inversify";

@injectable()
export class ClearNumbersRiddle implements Riddle {
  validateInput(input: number[]) {
    if (!Array.isArray(input))
      throw new Error("Clear numbers needs an array of numbers.");
  }
  run(input: number[]): number[] {
    const cleared = input.filter((element, index) => {
      return input.indexOf(element) === index;
    });
    return cleared;
  }
}
