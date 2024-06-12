import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    connectDB();
    const data = await request.json();
    const newTask = new Task(data);
    const savedTask = await newTask.save();
    return NextResponse.json(savedTask);
  } catch (error) {}
  return NextResponse.json(error.message, { status: 400 });
}
