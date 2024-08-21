import mongoose from "mongoose";

const leagueShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please complete the field."],
    },
    teams: {
      type: [String],
      required: [true, "Please complete the field."],
    },
    location: {
      type: String,
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

export const LeagueModel =
  mongoose?.models?.league || mongoose.model("league", leagueShema);
