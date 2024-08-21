"use client";
import { useSportsTree } from "@/context/SportsTreeContext";
import React, { useEffect } from "react";
import GetLeaguesTeam from "./GetLeaguesTeam";

const CreateTeams = () => {
  const {
    getLeaguesfireStore,
    leagues,
    addLeaguesFireStore,
    getTeamFireStore,
    team,
  } = useSportsTree();

  // UseEffect
  useEffect(() => {
    getLeaguesfireStore();
  }, []);

  useEffect(() => {
    console.log(team);
  }, [team]);

  // function
  const showTeams = (id) => {
    getTeamFireStore(id);
  };

  return (
    <div>
      <GetLeaguesTeam value={{ leagues, showTeams }} />
    </div>
  );
};

export default CreateTeams;
