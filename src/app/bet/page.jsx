"use client";
import { useState, useEffect } from "react";

const Bet = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBets = async () => {
      try {
        const response = await fetch("/api/bets", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        const result = await response.json();
        console.log("Respuesta de la API:", result);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    getBets();
  }, []);

  return (
    <div>
      <h1>Bets</h1>
    </div>
  );
};

export default Bet;
