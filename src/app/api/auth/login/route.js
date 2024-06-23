import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { dbAuth } from "@/utils/firebase"; // Asegúrate de que la ruta sea correcta

export async function PUT(request) {
  const data = await request.json();
  const { email, password } = data;
  try {
    const res = await signInWithEmailAndPassword(dbAuth, email, password);
    const { refreshToken, accessToken } = res.user.stsTokenManager;

    const response = NextResponse.json(res);

    // Configura las cookies para almacenar los tokens
    response.cookies.set("accessToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    response.cookies.set("refreshToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    // Log para verificar las cookies
    console.log("Cookies en la respuesta:", response.cookies);

    return response;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return NextResponse.json(
      { message: "Error al iniciar sesión", error: error.message },
      { status: 500 }
    );
  }
}
