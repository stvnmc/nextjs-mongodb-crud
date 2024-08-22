"use client";
import React, { useEffect, useState } from "react";

const GetTeams = ({ value }) => {
  const { team, deleteTeam, addTeam } = value;
  const [showInputText, setShowInputText] = useState(false);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");

  // inSubtmit

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await addTeam(team._id, inputText);
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
      {team ? (
        <div>
          <h1>{team.name}</h1>
          <button onClick={() => setShowInputText(true)}>agragar</button>
          {error ? <h1>{error}</h1> : null}
          <img
            className="w-[150px] h-[150px] object-cover"
            src={`data:${team.image.contentType};base64,${Buffer.from(
              team.image.data.data
            ).toString("base64")}`}
            alt={team.name}
          />
          <div>
            {showInputText ? (
              <div>
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    id="team"
                    placeholder="team"
                    onChange={inputChance}
                    value={inputText}
                  />
                  <button type="onSubmit">add</button>
                </form>
              </div>
            ) : null}
          </div>
          <div>
            {team.teams.map((iteam, i) => (
              <div key={i} className="flex">
                <h1 key={i}>{iteam}</h1>
                <button onClick={() => deleteTeam(team._id, iteam)}>
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
