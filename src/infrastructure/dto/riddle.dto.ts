export interface CesarCipherInput {
  shift: number;
  text: string;
}

export class RiddleDTO {
  constructor(
    input: string | string[] | number[] | CesarCipherInput,
    name: string
  ) {
    this.input = input;
    this.riddle_name = name;
  }
  private input: string | string[] | number[] | CesarCipherInput = "";
  private riddle_name: string = "";

  getInput(): string | string[] | number[] | CesarCipherInput {
    return this.input;
  }

  getName(): string {
    return this.riddle_name;
  }

  toPrimitives() {
    return {
      riddle_name: this.riddle_name,
      input: this.input,
    };
  }

  static mapFrom(data: any): RiddleDTO {
    return new RiddleDTO(data.input, data.riddle_type);
  }
}
