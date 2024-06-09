import { NextResponse } from "next/server";

export function GET(require, { params }) {
  return NextResponse.json({
    message: " obteniendo tarea...",
  });
}
