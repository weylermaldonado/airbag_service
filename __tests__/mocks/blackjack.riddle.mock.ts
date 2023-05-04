import { Riddle } from "../../src/infrastructure/interfaces";

export class MockBlackJackRiddle implements Riddle {
  validateInput(...args: any) {}
  run(...args: any): string | number | number[] {
    return 0;
  }
}
