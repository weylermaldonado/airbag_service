import "reflect-metadata";
import { SharedBootstrap } from "../../src/infrastructure/bootstrap";
import { CesarCipherRiddle } from "../../src/services/cesarcipher.riddle";

describe("black-jack-riddle-use-case", () => {
  beforeAll(() => {
    new SharedBootstrap().initTest();
  });
  it("should return mqtf", () => {
    // Arrange
    const input = { shift: 5, text: "hola" };
    const riddle = new CesarCipherRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual("MTQF");
  });
  it("should return BJDQJW", () => {
    // Arrange
    const input = { shift: 5, text: "weyler" };
    const riddle = new CesarCipherRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual("BJDQJW");
  });
  it("should return FNWGFL", () => {
    // Arrange
    const input = { shift: 5, text: "airbag" };
    const riddle = new CesarCipherRiddle();
    // Act
    const result = riddle.run(input);
    // Assert
    expect(result).toEqual("FNWGFL");
  });
});
