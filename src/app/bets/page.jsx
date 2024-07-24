"use client";
import { useBet } from "@/context/BetContext";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { getBetfireStore } = useBet();

  const [bets, setBets] = useState(null);

  const addInfoBets = async () => {
    const res = await getBetfireStore();
    setBets(res.result);
  };

  useEffect(() => {
    addInfoBets();
  }, []);

  useEffect(() => {
    console.log(bets);
  }, [bets]);

  return (
    <div className="container-bets">
      <h1>bets</h1>
      {bets ? (
        <div>
          {bets.map((iteam, i) => (
            <div key={i}  className="bet">
              <h1>{iteam.name}</h1>
              <h1>{iteam.date}</h1>
              <h1>{iteam.description}</h1>
            </div>
          ))}
        </div>
      ) : (
        <h1>no existen apuestas </h1>
      )}
    </div>
  );
};

export default Page;
