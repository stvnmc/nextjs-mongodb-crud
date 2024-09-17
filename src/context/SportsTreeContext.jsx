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
  const [league, setLeague] = useState(null);
  const [team, setTeam] = useState(null);

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

  const addLeagueTeam = async (id, nameTeam) => {
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

      await getLeagueTeam(id);

      return res;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getLeagueTeam = async (id) => {
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

      setLeague(data.result);

      return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //teams

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

      getLeagueTeam(id);
      return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createTeam = async (name, league, players, image) => {
    const teamData = {
      name: name,
      league: league,
      players: players,
      image: image,
    };

    try {
      const response = await fetch(`http://localhost:3000/api/team/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();

      if (!res.data) return res;

      getTeam(name);

      return res.data;
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTeam = async (name) => {
    try {
      const response = await fetch(`http://localhost:3000/api/team/${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();

      if (!res) return;

      setTeam(res.data);

      return;
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
        getLeagueTeam,
        leagues,
        league,
        team,
        deleteTeam,
        addLeagueTeam,
        createTeam,
        getTeam,
      }}
    >
      {children}
    </SportsTreeContext.Provider>
  );
};
