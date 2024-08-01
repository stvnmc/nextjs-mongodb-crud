"use client";

import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const CreateLeagues = () => {
  // UseState
  const [teams, setTeams] = useState([]);
  const [teamInput, setTeamInput] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    // await addBetFireStore(
    //   e.target.name.value,
    //   e.target.description.value,
    //   e.target.date.value
    // );
  };

  const handleInputChange = (e) => {
    setTeamInput(e.target.value);
  };

  const onSubmitAddTeams = async () => {
    const newTeam = teamInput;
    if (newTeam) {
      setTeams((prevTeams) => [...prevTeams, newTeam]);
      setTeamInput("");
    }
  };

  const deletedTeam = (indexToDelete) => {
    setTeams((prevTeams) =>
      prevTeams.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="flex flex-col items-center bg-[#787f85] rounded-[8px] w-[800px] y h-[700px]">
      <h1>create dets</h1>
      <form>
        <div className="flex flex-col m-[13px] mx-[40px]">
          <label className="mb-[6px]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            placeholder="name"
            type="text"
            className="bg-[#72706d] text-white w-[249px] h-[35px] text-[1.4em]"
          />
        </div>
        <div className="flex flex-col m-[13px] mx-[40px]">
          <label className="mb-[6px]" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            placeholder="date"
            type="text"
            className="bg-[#72706d] text-white w-[249px] h-[35px] text-[1.4em]"
          />
        </div>
        <div className="flex flex-col m-[13px] mx-[40px]">
          <label className="mb-[6px]">Team</label>
          <input
            id="teamInput"
            value={teamInput}
            placeholder="team"
            type="text"
            onChange={handleInputChange}
            className="bg-[#72706d] text-white w-[249px] h-[35px] text-[1.4em]"
          />
          <button
            onClick={onSubmitAddTeams}
            type="button"
            className="w-[98px] h-[41px] bg-[#787168] rounded-[9px] mt-[28px]"
          >
            Add Team
          </button>
        </div>
        <div className="flex w-[381px] h-[244px] flex-wrap flex-col">
          {teams.length > 0 ? (
            <>
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="bg-[#686349] m-[20px] h-[32px]  flex justify-around items-center rounded-[8px] relative"
                >
                  <h3>{team}</h3>
                  <button
                    className="absolute top-0 right-0"
                    onClick={() => deletedTeam(index)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              ))}
            </>
          ) : (
            <div>hola</div>
          )}
        </div>

        <button
          type="submit"
          className="w-[98px] h-[41px] bg-[#787168] rounded-[9px] mt-[28px]"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateLeagues;
