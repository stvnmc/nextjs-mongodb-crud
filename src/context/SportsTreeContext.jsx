"use client";
import React, { createContext, useContext, useState } from "react";

export const SportsTreeContext = createContext();

export const useSportsTree = () => {
  const context = useContext(SportsTreeContext);

  if (!context) {
    console.warn(
      "userContext not found. Make sure you are using UserProvider."
    );
  }

  return context;
};

export const SportsTreeProvider = ({ children }) => {
  // useState
  const [leagues, setLeagues] = useState(null);

  // Leagues

  const getLeaguesfireStore = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/leagues", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setLeagues(data.result);

      return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addLeaguesFireStore = async (name, location, teams) => {
    try {
      const response = await fetch("http://localhost:3000/api/leagues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, location, teams }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // await getLeaguesfireStore();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //equipos

  //jugadores

  return (
    <SportsTreeContext.Provider
      value={{ getLeaguesfireStore, addLeaguesFireStore }}
    >
      {children}
    </SportsTreeContext.Provider>
  );
};
