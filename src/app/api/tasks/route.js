const { NextResponse } = require("next/server");

export function GET() {
  return NextResponse.json({
    message: "obteniendo tareas ..>",
  });
}
