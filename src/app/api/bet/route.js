// import { db } from "@/utils/firebase";
// import { collection, doc, getDoc, setDoc } from "firebase/firestore";
// import { NextResponse } from "next/server";

import admin from "@/utils/adminFirebase";
import { db } from "@/utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const data = await request.json();
  console.log(data);

  return NextResponse.json({
    message: "Creación de usuario de sesión exitoso",
  });
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  try {
    const { token, ADsadas } = data; // Desestructurar los datos de la solicitud

    // Verificar el token de autenticación
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log("User ID:", decodedToken.uid);

    // Referencia al documento
    const docRef = doc(db, "coleccion", "documentoID");

    // Datos a agregar en el documento (solo los campos de ADsadas)
    const docData = {
      fecha: ADsadas.fecha,
      monto: ADsadas.monto,
      titulo: ADsadas.titulo,
    };

    // Establecer el documento
    await setDoc(docRef, docData);

    return NextResponse.json({
      message: "Documento creado/actualizado exitosamente",
    });
  } catch (error) {
    console.error("Error al crear/actualizar el documento:", error);
    return NextResponse.json({
      error: error.message,
    });
  }
}
