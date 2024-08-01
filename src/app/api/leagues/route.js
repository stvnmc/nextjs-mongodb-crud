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
    const newStudent = await LeagueModel.create(body);
    return NextResponse.json({ data: newStudent }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
};
