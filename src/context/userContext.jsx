"use client";

import { dbAuth } from "@/utils/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

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
  const [authenticated, setIsAuthenticated] = useState(null);
  const [errors, setErrors] = useState([]);

  const localStore = (name, accessToken) => {
    const newInfo = [{ name: name, accessCalendar: accessToken }];
    localStorage.setItem("Calendar", JSON.stringify(newInfo));
  };

  async function signup(email, password) {
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();

      setUser(data.username);

      localStore(data.username);
      setIsAuthenticated(true);

      return true;
    } catch (error) {
      return false;
    }
  }

  async function signin(email, password) {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();

      setUser(data.username);
      localStore(data.username);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      let errorMessage = error.code;
      if (error.code.startsWith("auth/")) {
        errorMessage = error.code.slice(5);
      }
      errorMessage = errorMessage.replace(/-/g, " ");
      setErrors(errorMessage);
    }
  }

  async function logout() {
    try {
      await signOut(dbAuth);
      localStorage.removeItem("Calendar");
      setUser("welcome");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const storedInfo = localStorage.getItem("Calendar");
    if (storedInfo === null) {
      setUser("welcome");
      setIsAuthenticated(false);

      return;
    }
    setIsAuthenticated(true);
    const info = JSON.parse(storedInfo);
    const name = info[0].name;

    setUser(name);
  }, []);

  return (
    <userContext.Provider value={{ user, setUser, signup, signin, logout }}>
      {children}
    </userContext.Provider>
  );
};
