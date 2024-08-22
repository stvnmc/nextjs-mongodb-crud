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

export const DELETE = async (req, { params }) => {
  await connectDB();

  const { id } = params;

  const body = await req.json();

  try {
    const result = await LeagueModel.updateOne(
      { _id: id },
      { $pull: { teams: body } }
    );

    if (result.nModified === 0) {
      return NextResponse.json(
        { error: "No team found to delete" },
        { status: 404 }
      );
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const POST = async (req, { params }) => {
  await connectDB();

  const { id } = params;

  const body = await req.json();

  try {
    const league = await LeagueModel.findOne({ _id: id, teams: body });

    if (league) {
      return NextResponse.json({ result: "exists" });
    }

    const result = await LeagueModel.updateOne(
      { _id: id },
      { $push: { teams: body } }
    );

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
