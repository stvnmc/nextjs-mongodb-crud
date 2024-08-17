"use client";
import { useSportsTree } from "@/context/SportsTreeContext";
import React, { useEffect } from "react";

const CreateTeams = () => {
  const { getLeaguesfireStore, leagues, addLeaguesFireStore } = useSportsTree();

  useEffect(() => {
    getLeaguesfireStore();
  }, []);

  useEffect(() => {
    console.log(leagues);
  }, [leagues]);

  return (
    <div>
      <div>
        {leagues ? (
          <div>
            {leagues.map((iteam, i) => (
              <div>{iteam.name}</div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CreateTeams;
