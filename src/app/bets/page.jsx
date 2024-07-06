"use client";
import React, { useEffect } from "react";

const Page = () => {
  async function getItems() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("bet"),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/bet",
        requestOptions
      );

      const data = await response.json(); // Convertir la respuesta a JSON
      console.log(data); // Manejar los datos recibidos
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return <div>Page</div>;
};

export default Page;
