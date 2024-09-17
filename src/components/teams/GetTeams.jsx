"use client";
import React, { useEffect, useState } from "react";

const GetTeams = ({ value }) => {
  const { league, deleteTeam, addLeagueTeam, showTeam } = value;
  const [showInputText, setShowInputText] = useState(false);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");

  // inSubtmit

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await addLeagueTeam(league._id, inputText);
    if (res.result === "exists") {
      setError("este aquipo ya existe");
      return;
    } 

    setInputText("");
  };

  const inputChance = (e) => {
    setInputText(e.target.value);
  };

  //useEffect

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div>
      {league ? (
        <div>
          <h1>{league.name}</h1>
          <button onClick={() => setShowInputText(true)}>agragar</button>
          {error ? <h1>{error}</h1> : null}
          <img
            className="w-[150px] h-[150px] object-cover"
            src={`data:${league.image.contentType};base64,${Buffer.from(
              league.image.data.data
            ).toString("base64")}`}
            alt={league.name}
          />
          <div>
            {showInputText ? (
              <div>
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    id="league"
                    placeholder="league"
                    onChange={inputChance}
                    value={inputText}
                  />
                  <button type="onSubmit">add</button>
                </form>
              </div>
            ) : null}
          </div>
          <div>
            {league.teams.map((iteam, i) => (
              <div key={i} className="flex">
                <h1 onClick={() => showTeam(iteam, league.name)}>{iteam}</h1>
                <button onClick={() => deleteTeam(league._id, iteam)}>
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GetTeams;
