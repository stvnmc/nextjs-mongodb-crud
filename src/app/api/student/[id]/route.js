import connectDB from "@/lib/db";
import { StudentModel } from "@/models/Student";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await StudentModel.findById(id);
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await StudentModel.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { message: `Doncument with ID: ${id} not found` },
        { status: 200 }
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
