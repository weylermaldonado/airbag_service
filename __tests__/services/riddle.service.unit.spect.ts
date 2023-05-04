import "reflect-metadata";
import { SharedBootstrap } from "../../src/infrastructure/bootstrap";
import RiddleService from "../../src/services/riddle.service";
import { MockBlackJackRiddle } from "../mocks/blackjack.riddle.mock";
import { MockCesarCipherRiddle } from "../mocks/cesarcipher.riddle.mock";
import { MockClearNumbersRiddle } from "../mocks/clearnumbers.riddle.mock";
import { RiddleDTO } from "../../src/infrastructure/dto/riddle.dto";

describe("riddle-service-use-case", () => {
  beforeAll(() => {
    new SharedBootstrap().initTest();
  });

  it("should call black jack riddle", async () => {
    // Arrange
    const service = new RiddleService(
      new MockBlackJackRiddle(),
      new MockCesarCipherRiddle(),
      new MockClearNumbersRiddle()
    );
    const payload = new RiddleDTO(["A", "A", "8"], "blackjack");
    // Act
    const result: any = service.execute(payload);
    // Assert
    expect(result).toBeDefined();
    expect(result.result).toBeDefined();
    expect(typeof result.result).toBe("number");
  });
  it("should call clear numbers riddle", async () => {
    // Arrange
    const service = new RiddleService(
      new MockBlackJackRiddle(),
      new MockCesarCipherRiddle(),
      new MockClearNumbersRiddle()
    );
    const payload = new RiddleDTO([4, 3, 4, 3, 1, 7, 8, 8], "clearDuplicates");
    // Act
    const result: any = service.execute(payload);
    // Assert
    expect(result).toBeDefined();
    expect(result.result).toBeDefined();
    expect(Array.isArray(result.result)).toBe(true);
  });
  it("should call black jack riddle", async () => {
    // Arrange
    const service = new RiddleService(
      new MockBlackJackRiddle(),
      new MockCesarCipherRiddle(),
      new MockClearNumbersRiddle()
    );
    const payload = new RiddleDTO(
      {
        shift: 5,
        text: "hola",
      },
      "shiftCipher"
    );
    // Act
    const result: any = service.execute(payload);
    // Assert
    expect(result).toBeDefined();
    expect(result.result).toBeDefined();
    expect(typeof result.result).toBe("string");
  });
  it("should thrown an error when the riddle doesn't exists", async () => {
    const service = new RiddleService(
      new MockBlackJackRiddle(),
      new MockCesarCipherRiddle(),
      new MockClearNumbersRiddle()
    );
    const payload = new RiddleDTO(
      {
        shift: 5,
        text: "hola",
      },
      "notExist"
    );
    // Act
    try {
      service.execute(payload);
    } catch (error: any) {
      // Assert
      expect(error.message).toBe("Riddle not found.");
    }
  });
});
