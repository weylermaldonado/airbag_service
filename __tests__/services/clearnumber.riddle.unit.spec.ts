import "reflect-metadata";
import { SharedBootstrap } from "../../src/infrastructure/bootstrap";
import { ClearNumbersRiddle } from "../../src/services/clearnumbers.riddle";

describe("black-jack-riddle-use-case", () => {
  beforeAll(() => {
    new SharedBootstrap().initTest();
  });

  it("should return [4, 3, 1, 7, 8]", () => {
    // Arrange
    const input = [4, 3, 4, 3, 1, 7, 8, 8];
    const riddle = new ClearNumbersRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual([4, 3, 1, 7, 8]);
  });
  it("should return [5, 6, 7]", () => {
    // Arrange
    const input = [5, 5, 5, 6, 6, 6, 7, 7, 7];
    const riddle = new ClearNumbersRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual([5, 6, 7]);
  });
  it("should return [1, 2, 3, 4, 5]", () => {
    // Arrange
    const input = [1, 2, 3, 4, 5];
    const riddle = new ClearNumbersRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
