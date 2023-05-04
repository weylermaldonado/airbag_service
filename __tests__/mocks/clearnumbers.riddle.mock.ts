import { Riddle } from "../../src/infrastructure/interfaces";

export class MockClearNumbersRiddle implements Riddle {
  validateInput(...args: any) {}
  run(...args: any): string | number | number[] {
    return [1];
  }
}
