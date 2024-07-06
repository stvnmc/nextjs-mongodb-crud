import { dbAuth } from "@/utils/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, password } = data;

    const res = await createUserWithEmailAndPassword(dbAuth, email, password);

    return NextResponse.json({ message: res });
  } catch (error) {
    //     console.error("Error al crear el usuario:", error);
    return NextResponse.json(
      { message: "Error al crear el usuario", error: error.message },
      { status: 500 }
    );
  }
}
