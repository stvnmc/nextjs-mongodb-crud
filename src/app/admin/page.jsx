"use client";
import CreateBets from "@/components/bets/CreateBets";
import GetBets from "@/components/bets/GetBets";
import CreateLeagues from "@/components/leagues/CreateLeagues";
import CreateTeams from "@/components/teams/CreateTeams";
import { useBet } from "@/context/BetContext";
import Navbar from "@/layout/Navbar";
import React, { useState } from "react";

const Page = () => {
  // UseState
  const [openBetsOFutbol, setOpenBetsOFutbol] = useState("bet");

  // Funtion
  const chanceOpenBF = (value) => {
    setOpenBetsOFutbol(value);
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="flex justify-around">
          <button
            className="w-[76px] h-[35px] rounded-[5px] bg-customColor"
            onClick={() => chanceOpenBF("bet")}
          >
            bets
          </button>

          <button
            className="w-[76px] h-[35px] rounded-[5px] bg-customColor"
            onClick={() => chanceOpenBF("league")}
          >
            leagues
          </button>
          <button
            className="w-[76px] h-[35px] rounded-[5px] bg-customColor"
            onClick={() => chanceOpenBF("team")}
          >
            teams
          </button>
        </div>
        <div className="flex justify-center my-[63px]">
          {openBetsOFutbol === "bet" && <CreateBets />}
          {openBetsOFutbol === "league" && <CreateLeagues />}
          {openBetsOFutbol === "team" && <CreateTeams />}
        </div>
      </main>
    </>
  );
};

export default Page;
