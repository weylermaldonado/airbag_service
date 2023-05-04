import { Record, String, Array, Number, Union, Literal } from "runtypes";

const RIDDLES_ALLOWED = Union(
  Literal("blackjack"),
  Literal("shiftCipher"),
  Literal("clearDuplicates")
);

const CesarCipherInput = Record({
  shift: Number,
  text: String,
});

export const RequestRiddle = Record({
  requestData: Record({
    riddle_type: RIDDLES_ALLOWED,
    input: String.Or(Array(String)).Or(Array(Number)).Or(CesarCipherInput),
  }),
});
