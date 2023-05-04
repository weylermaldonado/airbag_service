import "reflect-metadata";
import { SharedBootstrap } from "../../src/infrastructure/bootstrap";
import { BlackJackRiddle } from "../../src/services/blackjack.riddle";

describe("black-jack-riddle-use-case", () => {
  beforeAll(() => {
    new SharedBootstrap().initTest();
  });
  it("should thrown an error when the input is invalid", () => {
    // Arrange
    const input = "hello";
    const riddle = new BlackJackRiddle();
    try {
      // Act
      riddle.validateInput(input);
    } catch (error: any) {
      // Assert
      expect(error.message).toEqual(
        "Blackjack riddle needs an array of strings."
      );
    }
  });
  it("should return 13", () => {
    // Arrange
    const input = ["A", "2", "K"];
    const riddle = new BlackJackRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual(13);
  });
  it("should return 18", () => {
    // Arrange
    const input = ["Q", "8"];
    const riddle = new BlackJackRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual(18);
  });
  it("should return 21", () => {
    // Arrange
    const input = ["3", "3", "9", "A", "6"];
    const riddle = new BlackJackRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual(21);
  });
});
