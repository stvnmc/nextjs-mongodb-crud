import connectDB from "@/lib/db";
import { TeamModel } from "@/models/Team";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  await connectDB();
  try {
    const body = await req.json();

    const newTeam = await TeamModel.create({
      name: body.name,
      league: body.league,
      players: body.players,
      image: {
        data: Buffer.from(body.image.data),
        contentType: body.image.contentType,
      },
    });

    return NextResponse.json({ data: newTeam }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
};
