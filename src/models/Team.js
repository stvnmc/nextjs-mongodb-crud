import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please complete the field."],
    },
    league: {
      type: String,
      required: [true, "Please complete the field."],
    },
    players: {
      type: [String],
      required: [true, "Please complete the field."],
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TeamModel =
  mongoose?.models?.Team || mongoose.model("team", teamSchema);
