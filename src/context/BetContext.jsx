"use client";
import React, { createContext, useContext, useState } from "react";

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
  const [bets, setBets] = useState(null);

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

      setBets(data.result);

      return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addBetFireStore = async (name, description, date) => {
    try {
      const response = await fetch("http://localhost:3000/api/bets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, date }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      await getBetfireStore();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateBetFireStore = async (id, name, description, date) => {
    try {
      const response = await fetch("http://localhost:3000/api/bets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await getBetfireStore();
      return response.ok;
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  
  const deleteBetFireStore = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/api/bets", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await getBetfireStore();
      return response.ok;
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <betContext.Provider
      value={{
        bets,
        setBets,
        getBetfireStore,
        addBetFireStore,
        deleteBetFireStore,
      }}
    >
      {children}
    </betContext.Provider>
  );
};
