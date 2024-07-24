"use client";
import React, { createContext, useContext } from "react";

export const betContext = createContext();

export const useBet = () => {
  const context = useContext(betContext);

  if (!context) {
    console.warn(
      "userContext not found. Make sure you are using UserProvider."
    );
  }

  return context;
};

export const BetProvider = ({ children }) => {
  const getBetfireStore = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/bets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <betContext.Provider value={{ getBetfireStore }}>
      {children}
    </betContext.Provider>
  );
};
