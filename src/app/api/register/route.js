import { dbAuth } from "@/utils/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const data = await request.json();
  const { email, password } = data;
  console.log(email, password);
  try {
    const res = await createUserWithEmailAndPassword(dbAuth, email, password);

    const emailParts = res.user.email.split("@");
    const username = emailParts[0];

    return NextResponse.json({ username });
  } catch (error) {
    return NextResponse.json({ mensa: "dsadas" });
  }
}
