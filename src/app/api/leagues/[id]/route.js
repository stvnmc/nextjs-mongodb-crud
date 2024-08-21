import connectDB from "@/lib/db";
import { LeagueModel } from "@/models/League";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
  await connectDB();

  const { id } = params;

  try {
    if (!id) return;

    const result = await LeagueModel.findById(id);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
