"use client";
import { useSportsTree } from "@/context/SportsTreeContext";
import React, { useEffect, useState } from "react";
import GetLeaguesTeam from "./GetLeaguesTeam";
import GetTeams from "./GetTeams";

// icons
import { IoArrowBack } from "react-icons/io5";

const CreateTeams = () => {
  const {
    getLeaguesfireStore,
    leagues,
    getTeamFireStore,
    team,
    deleteTeam,
    addTeam,
  } = useSportsTree();

  //UseState

  const [chancePage, setChancePage] = useState("leagues");

  // UseEffect
  useEffect(() => {
    getLeaguesfireStore();
  }, []);

  // function
  const showTeams = async (id) => {
    await getTeamFireStore(id);
    setChancePage("team");
  };

  return (
    <div>
      {chancePage === "team" && (
        <IoArrowBack onClick={() => setChancePage("leagues")} />
      )}
      {chancePage === "leagues" && (
        <GetLeaguesTeam value={{ leagues, showTeams }} />
      )}
      {chancePage === "team" && (
        <GetTeams value={{ team, deleteTeam, addTeam }} />
      )}
    </div>
  );
};

export default CreateTeams;
