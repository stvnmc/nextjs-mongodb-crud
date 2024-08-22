"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

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
  const [team, setTeam] = useState(null);

  useEffect(() => {
    console.log(leagues);
  }, [leagues]);

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

  const addLeaguesFireStore = async (name, location, teams, image) => {
    const leagueData = {
      name: name,
      location: location,
      teams: teams,
      image: image,
    };

    try {
      const response = await fetch("http://localhost:3000/api/leagues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leagueData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      await getLeaguesfireStore();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //teams
  const getTeamFireStore = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/leagues/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setTeam(data.result);

      return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteTeam = async (id, nameTeam) => {
    try {
      const response = await fetch(`http://localhost:3000/api/leagues/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nameTeam),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data.result.acknowledged) return;

      getTeamFireStore(id);
      return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addTeam = async (id, nameTeam) => {
    try {
      const response = await fetch(`http://localhost:3000/api/leagues/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nameTeam),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();

      await getTeamFireStore(id);

      return res;
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //jugadores

  return (
    <SportsTreeContext.Provider
      value={{
        getLeaguesfireStore,
        addLeaguesFireStore,
        getTeamFireStore,
        leagues,
        team,
        deleteTeam,
        addTeam,
      }}
    >
      {children}
    </SportsTreeContext.Provider>
  );
};
