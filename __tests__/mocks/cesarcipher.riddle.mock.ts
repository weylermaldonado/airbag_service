import { Riddle } from "../../src/infrastructure/interfaces";

export class MockCesarCipherRiddle implements Riddle {
  validateInput(...args: any) {}
  run(...args: any): string | number | number[] {
    return "MTQF";
  }
}
