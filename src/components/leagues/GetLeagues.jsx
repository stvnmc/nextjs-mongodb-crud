"use client";
import { useSportsTree } from "@/context/SportsTreeContext";
import React, { useEffect } from "react";

const GetLeagues = () => {
  const { getLeaguesfireStore, leagues } = useSportsTree();

  useEffect(() => {
    getLeaguesfireStore();
  }, []);

  useEffect(() => {
    console.log(leagues);
  }, [leagues]);

  return (
    <div>
      <h1>Leagues</h1>
      <div>
        {leagues
          ? leagues.map((item, i) => (
              <div key={i} className="m-3">
                <p>{item.name}</p>
                <p>{item.location}</p>
                <div>
                  {item.teams
                    ? item.teams.map((teams, i) => <p key={i}>{teams}</p>)
                    : null}
                </div>
                <div>
                  {item.image && item.image.data && (
                    <img
                      className="w-[150px] h-[150px] object-cover"
                      src={`data:${item.image.contentType};base64,${Buffer.from(
                        item.image.data.data
                      ).toString("base64")}`}
                      alt={item.name}
                    />
                  )}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default GetLeagues;
