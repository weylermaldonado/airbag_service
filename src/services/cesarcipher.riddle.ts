import { CesarCipherInput } from "@/infrastructure/dto/riddle.dto";
import { Riddle } from "@/infrastructure/interfaces";
import { injectable } from "inversify";

@injectable()
export class CesarCipherRiddle implements Riddle {
  validateInput(data: CesarCipherInput) {
    if (!data.shift || !data.text)
      throw new Error("The Cesar Cipher needs a shift and a text.");
  }
  run(input: CesarCipherInput): string | number | number[] {
    let { shift, text } = input;
    // Convert string to uppercase to simplify the cipher
    text = text.toUpperCase();

    let cipher = "";

    // Iterate over each char
    for (let i = 0; i < text.length; i++) {
      // Get the ascii value
      let asciiCode = text.charCodeAt(i);

      // Apply the shift
      let textEncoded = asciiCode + shift;

      //If the resulting code is greater than the ASCII code for 'Z', return to the beginning of the alphabet
      if (textEncoded > 90) {
        textEncoded = textEncoded - 26;
      }

      // Convert the encrypted code back to a character and add it to the encrypted string
      cipher += String.fromCharCode(textEncoded);
    }
    return cipher;
  }
}
