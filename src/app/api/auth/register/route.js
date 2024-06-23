import { NextResponse } from "next/server";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { dbAuth } from "@/utils/firebase"; // Asegúrate de que la ruta sea correcta

export async function PUT(request) {
  const data = await request.json();
  const { email, password } = data;
  const res = await createUserWithEmailAndPassword(dbAuth, email, password);

  const { refreshToken, accessToken, expirationTime } = res.stsTokenManager;

  console.log(res.stsTokenManager);
  console.log(refreshToken);
  console.log(accessToken);
  console.log(expirationTime);

  return NextResponse.json(res);
}
