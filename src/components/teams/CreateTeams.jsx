"use client";
import { useSportsTree } from "@/context/SportsTreeContext";
import React, { useEffect, useState } from "react";
import GetLeaguesTeam from "./GetLeaguesTeam";
import GetTeams from "./GetTeams";

// icons
import { IoArrowBack } from "react-icons/io5";
import ShowTeam from "./ShowTeam";

const CreateTeams = () => {
  const {
    getLeaguesfireStore,
    leagues,
    getLeagueTeam,
    league,
    team,
    deleteTeam,
    addLeagueTeam,
    createTeam,
    getTeam,
  } = useSportsTree();

  //UseState

  const [statePage, setStatePage] = useState("leagues");
  const [teamShow, setTeamShow] = useState({ nameTeam: "", league: "" });

  // UseEffect
  useEffect(() => {
    getLeaguesfireStore();
  }, []);

  // function
  const showTeams = async (id) => {
    await getLeagueTeam(id);
    setStatePage("team");
  };

  const showTeam = (nameTeam, league) => {
    setTeamShow({ nameTeam, league });
    setStatePage("showTeam");
  };

  const chancePage = () => {
    if (statePage === "team") setStatePage("leagues");
    if (statePage === "showTeam") setStatePage("team");
  };

  return (
    <div>
      {(statePage === "team" || statePage === "showTeam") && (
        <IoArrowBack onClick={chancePage} />
      )}
      {statePage === "leagues" && (
        <GetLeaguesTeam value={{ leagues, showTeams }} />
      )}
      {statePage === "team" && (
        <GetTeams value={{ league, deleteTeam, addLeagueTeam, showTeam }} />
      )}
      {statePage === "showTeam" && (
        <ShowTeam value={{ teamShow, createTeam, getTeam, team }} />
      )}
    </div>
  );
};

export default CreateTeams;
