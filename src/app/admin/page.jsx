"use client";
import GetBets from "@/components/bets/GetBets";
import { useBet } from "@/context/BetContext";
import Navbar from "@/layout/Navbar";
import React, { useState } from "react";

const Page = () => {
  //Context
  const { addBetFireStore } = useBet();

  // UseState
  const [openBetsOFutbol, setOpenBetsOFutbol] = useState("");

  // Funtion
  const chanceOpenBF = (value) => {
    setOpenBetsOFutbol(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await addBetFireStore(
      e.target.name.value,
      e.target.description.value,
      e.target.date.value
    );
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
        <div>
          {openBetsOFutbol === "bet" ? (
            <div>
              <div>
                <h1>create dets</h1>
                <form onSubmit={onSubmit}>
                  <label htmlFor="name">Name</label>
                  <input id="name" placeholder="name" type="texto" />

                  <label htmlFor="description">Description</label>
                  <input
                    id="description"
                    placeholder="Description"
                    type="texto"
                  />

                  <label htmlFor="date">Name</label>
                  <input id="date" type="date" />

                  <button type="submit">Submit</button>
                </form>
              </div>
              <GetBets />
            </div>
          ) : (
            <div>futbol</div>
          )}
        </div>
      </main>
    </>
  );
};

export default Page;
