import mongoose from "mongoose";

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
  mongoose?.models?.bet || mongoose.model("bet", betShema);
