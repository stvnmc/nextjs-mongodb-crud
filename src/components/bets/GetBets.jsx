"use client";
import { useBet } from "@/context/BetContext";

import React, { useEffect, useState } from "react";

const GetBets = () => {
  const { getBetfireStore, bets, deleteBetFireStore } = useBet();

  useEffect(() => {
    getBetfireStore();
  }, []);

  return (
    <div>
      {bets ? (
        <div>
          {bets.map((item, i) => (
            <div key={i} className="bet">
              <h1>{item.name}</h1>
              <h1>{item.date}</h1>
              <h1>{item.description}</h1>
              <button onClick={() => deleteBetFireStore(item._id)}>
                delete
              </button>
              <button onClick={() => deleteBetFireStore(item._id)}>
                update
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1>no existen apuestas </h1>
      )}
    </div>
  );
};

export default GetBets;
