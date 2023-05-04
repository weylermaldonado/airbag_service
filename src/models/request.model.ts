import { Schema, model } from "mongoose";
const RequestSchema = new Schema(
  {
    payload: {
      type: Object,
    },
  },
  { timestamps: true }
);

export const Request = model("Request", RequestSchema);
