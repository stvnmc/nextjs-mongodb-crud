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

    console.log(newTeam);
    
    return NextResponse.json({ data: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: false }, { status: 500 });
  }
};
