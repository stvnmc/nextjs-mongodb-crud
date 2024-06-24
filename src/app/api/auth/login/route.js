import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { dbAuth } from "@/utils/firebase";

export async function PUT(request) {
  const data = await request.json();
  const { email, password } = data;

  try {
    const res = await signInWithEmailAndPassword(dbAuth, email, password);
    const { refreshToken, accessToken } = res.user.stsTokenManager;

    const response = NextResponse.json({ message: accessToken });

    response.headers.append(
      "Set-Cookie",
      `accessToken=${accessToken}; HttpOnly; Secure; Path=/; SameSite=Strict`
    );
    response.headers.append(
      "Set-Cookie",
      `refreshToken=${refreshToken}; HttpOnly; Secure; Path=/; SameSite=Strict`
    );
    console.log("regres", refreshToken);
    console.log("token", accessToken);
    return response;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return NextResponse.json(
      { message: "Error al iniciar sesión", error: error.message },
      { status: 500 }
    );
  }
}
