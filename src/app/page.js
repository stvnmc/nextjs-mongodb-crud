"use client";
import GetBets from "@/components/bets/GetBets";
import GetLeagues from "@/components/leagues/GetLeagues";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState("home");

  const chanceStateShow = (e) => {
    setShow(e);
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center flex-col mt-4">
        <div>
          <button
            className="mt-4 mb-4 ml-[49px] mr-[49px]"
            onClick={() => chanceStateShow("home")}
          >
            home
          </button>
          <button
            className="mt-4 mb-4 ml-[49px] mr-[49px]"
            onClick={() => chanceStateShow("bet")}
          >
            bets
          </button>
          <button
            className="mt-4 mb-4 ml-[49px] mr-[49px]"
            onClick={() => chanceStateShow("league")}
          >
            leagues
          </button>
        </div>
        <div>
          {show === "home" && <h2>home</h2>}
          {show === "bet" && <GetBets />}
          {show === "league" && <GetLeagues />}
        </div>
      </div>
      <Footer />
    </>
  );
}
