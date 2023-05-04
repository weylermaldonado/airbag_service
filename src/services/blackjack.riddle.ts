import { Riddle } from "@/infrastructure/interfaces";
import { injectable } from "inversify";
const CARD_VALUES: any = {
  J: 10,
  Q: 10,
  K: 10,
  A: [1, 11],
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 5,
  "7": 7,
  "8": 8,
  "9": 9,
};
@injectable()
export class BlackJackRiddle implements Riddle {
  validateInput(input: any) {
    if (!Array.isArray(input))
      throw new Error("Blackjack riddle needs an array of strings.");
  }
  run(input: string[]): string | number | number[] {
    let handValue = 0;
    let hasA = false;

    // Iterate over each input item
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      // If has A lets skip it and calculate in the next steps
      if (element === "A") {
        hasA = true;
        continue;
      }
      handValue += CARD_VALUES[element];
    }

    // If has an A and the hand value is lover than 21
    // make the substraction to find is closer to 1 o 11
    // and add the value to hand
    if (hasA && handValue < 21) {
      const diff = 21 - handValue;
      const isOne = Math.abs(diff - CARD_VALUES["A"][0]);
      const isEleven = Math.abs(diff - CARD_VALUES["A"][1]);
      const result = Math.min(isOne, isEleven);
      result === isOne
        ? (handValue += CARD_VALUES["A"][0])
        : (handValue += CARD_VALUES["A"][1]);
    }
    return handValue;
  }
}
