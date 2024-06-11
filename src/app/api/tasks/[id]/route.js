import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(require, { params }) {
  try {
    connectDB();
    const taskFount = await Task.findById(params.is);
    if (!taskFount) {
      return NextResponse.json(
        {
          message: "Task not found",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(taskFount);
  } catch (error) {}
  return NextResponse.json(error.message, {
    status: 400,
  });
}

export async function DELETE(require, { params }) {
  try {
    const taskDeleted = await Task.findByIdAndDelete(params.id);
    if (!taskDeleted) {
      return NextResponse.json(
        {
          message: "Tasknot found",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(taskDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(require, { params }) {
  try {
    const data = await require.json();
    const taskUpdated = await Task.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    console.log(data);
    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
