export class RiddleDTO {
  constructor(input: string | string[] | number[], name: string) {
    this.input = input;
    this.riddle_name = name;
  }
  private input: string | string[] | number[] = "";
  private riddle_name: string = "";

  getInput(): string | string[] | number[] {
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
