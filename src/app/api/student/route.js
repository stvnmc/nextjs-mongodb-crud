import connectDB from "@/lib/db";
import { StudentModel } from "@/models/Student";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  await connectDB();
  try {
    const body = await req.json();
    const newStudent = await StudentModel.create(body);
    return NextResponse.json({ data: newStudent }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const GET = async () => {
  await connectDB();
  try {
    const result = await StudentModel.find({});
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
