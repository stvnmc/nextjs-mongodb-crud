"use client";
import CreateBets from "@/components/bets/CreateBets";
import GetBets from "@/components/bets/GetBets";
import CreateLeagues from "@/components/leagues/CreateLeagues";
import { useBet } from "@/context/BetContext";
import Navbar from "@/layout/Navbar";
import React, { useState } from "react";

const Page = () => {
  // UseState
  const [openBetsOFutbol, setOpenBetsOFutbol] = useState("");

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
            onClick={() => chanceOpenBF("futbol")}
          >
            futbol
          </button>
        </div>
        <div className="flex justify-center my-[63px]">
          {openBetsOFutbol === "bet" ? (
            <div>
              <CreateBets />
              <GetBets />
            </div>
          ) : (
            <CreateLeagues />
          )}
        </div>
      </main>
    </>
  );
};

export default Page;
