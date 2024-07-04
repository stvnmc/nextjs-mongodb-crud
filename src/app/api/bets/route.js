import { db } from "@/utils/config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request) {
  const collectionName = "bet";
  const querySnapshot = await getDocs(collection(db, collectionName));
  console.log(querySnapshot.empty);
  try {
    return NextResponse.json({ username: "dsa" });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
// export async function PUT(request) {
//   console.log("ojal");

//   try {
//     return NextResponse.json({ username: "dsda" });
//   } catch (error) {
//     return NextResponse.json({ error: error });
//   }
// }
