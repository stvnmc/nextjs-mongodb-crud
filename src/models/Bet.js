import mongoose, { Collection } from "mongoose";

const betShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please complete the field."],
    },
    description: {
      type: String,
      required: [true, "Please complete the field."],
    },
    date: {
      type: String,
      required: [true, "Please complete the field."],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const BetModel =
  mongoose?.models?.quipoos || mongoose.model("quipoos", betShema);
