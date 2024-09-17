import connectDB from "@/lib/db";
import { TeamModel } from "@/models/Team";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();

  const { id } = params;

  try {
    if (!id)
      return NextResponse.json(
        { data: null, message: "ID is required" },
        { status: 400 }
      );

    const result = await TeamModel.findOne({ name: id });

    if (!result) {
      return NextResponse.json({ date: false });
    }

    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
