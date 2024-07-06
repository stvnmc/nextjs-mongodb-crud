"use client";

import { createContext, useContext, useState } from "react";

export const userContext = createContext();

export const useUser = () => {
  const context = useContext(userContext);

  if (!context) {
    console.warn(
      "userContext not found. Make sure you are using UserProvider."
    );
  }

  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signup(email, password) {
    const user = { email, password };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const res = fetch("http://localhost:3000/api/auth/register", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    return res;
  }

  return (
    <userContext.Provider value={{ user, signup }}>
      {children}
    </userContext.Provider>
  );
};
