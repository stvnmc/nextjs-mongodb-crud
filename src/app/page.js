import { db } from "@/utils/firebase";
import { doc, setDoc } from "firebase/firestore";

async function Home() {
  // const mandarDatos = async () => {
  //   try {
  //     // Crear una referencia al documento
  //     const docRef = doc(db, "coleccion", "documentoID");

  //     // Establecer los datos en el documento
  //     await setDoc(docRef, { mensaje: "hola" });
  //     console.log("Documento escrito con éxito");
  //   } catch (e) {
  //     console.error("Error al escribir el documento: ", e);
  //   }
  // };

  // await mandarDatos();

  return <div className="grid grid-cols-3 gap-2">hola</div>;
}
export default Home;
