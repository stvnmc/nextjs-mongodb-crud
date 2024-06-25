import { db } from "@/utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = request.headers.get("Authorization");

  const Date = request.headers.get("Date");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const docRef = doc(db, "bet", Date);

  const docSnapshot = await getDoc(docRef, headers);

  let existingData = {};
  if (docSnapshot.exists()) {
    existingData = docSnapshot.data();
  }
  console.log(existingData);
  return NextResponse.json({
    message: "Creación de usuario de sesión exitoso",
  });
}

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
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Referencia al documento
    const docRef = doc(db, "bet", "7,14,2024");

    // Obtener el documento actual
    const docSnapshot = await getDoc(docRef);
    let existingData = {};
    if (docSnapshot.exists()) {
      existingData = docSnapshot.data();
    }

    // Datos a agregar en el documento
    const newEntry = {
      headers,
      "brasil/costarica": {
        bet: ADsadas.monto,
        monto: ADsadas.monto,
      },
    };

    // Combinar los datos existentes con los nuevos
    const updatedData = {
      ...existingData,
      ...newEntry,
    };

    // Actualizar el documento con los datos combinados
    await setDoc(docRef, updatedData);

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
