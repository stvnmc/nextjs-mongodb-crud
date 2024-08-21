import connectDB from "@/lib/db";
import { LeagueModel } from "@/models/League";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();
  try {
    const result = await LeagueModel.find({});
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const POST = async (req, res) => {
  await connectDB();
  try {
    const body = await req.json();

    const newLeague = await LeagueModel.create({
      name: body.name,
      location: body.location,
      teams: body.teams,
      image: {
        data: Buffer.from(body.image.data),
        contentType: body.image.contentType,
      },
    });

    return NextResponse.json({ data: newLeague }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
};
