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
    
  // ligas
  //equipos
  //jugadores

  return (
    <SportsTreeContext.Provider value={{}}>
      {children}
    </SportsTreeContext.Provider>
  );
};
f;
