import { dbAuth } from "@/utils/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const data = await request.json();
  const { email, password } = data;

  try {
    const res = await signInWithEmailAndPassword(dbAuth, email, password);
    const emailParts = res.user.email.split("@");
    const username = emailParts[0];

    return NextResponse.json({ username });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
