import { NextResponse } from "next/server";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db, dbAuth } from "@/utils/firebase"; // Asegúrate de que la ruta sea correcta
import { doc, getDoc } from "firebase/firestore";

const getToken = async () => {
  const res = await signInWithEmailAndPassword(
    dbAuth,
    "stvnmc@gmail.com",
    "123456788"
  );
  const idToken = res._tokenResponse.idToken;
  return idToken;
};

export async function PUT(request) {
  const data = await request.json();

  const res = await signInWithEmailAndPassword(
    dbAuth,
    data.email,
    data.password
  );

  return NextResponse.json(res);

  //   try {
  //     const data = await request.json();

  //     // Crear el usuario con email y contraseña
  //     const res = await createUserWithEmailAndPassword(
  //       dbAuth,
  //       data.email,
  //       data.password
  //     );

  //     console.log("Usuario creado:", res);
  //     return NextResponse.json({
  //       message: "Usuario creado con éxito",
  //       data: res,
  //     });
  //   } catch (error) {
  //     console.error("Error al crear el usuario:", error);
  //     return NextResponse.json(
  //       { message: "Error al crear el usuario", error: error.message },
  //       { status: 500 }
  //     );
  //   }
}

export async function GET(request) {
  try {
    const resToken = await getToken();
    const headers = {
      Authorization: `Bearer ${resToken}`,
    };

    // Referencia al documento
    const docRef = doc(db, "coleccion", "documentoID");
    console.log("No such document!");

    // Obtener el documento
    const docSnap = await getDoc(docRef, { headers });

    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
