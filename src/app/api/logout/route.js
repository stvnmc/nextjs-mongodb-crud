import { dbAuth } from "@/utils/config";
import { signOut } from "firebase/auth";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    await signOut(dbAuth, email, password);
    return NextResponse.json({ message: "User signed out successfully" });
  } catch (error) {
    return NextResponse.json({ "Error al cerrar sesión:": error });
  }
}
