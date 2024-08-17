"use client";

import { useSportsTree } from "@/context/SportsTreeContext";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const CreateLeagues = () => {
  //UseContext
  const { addLeaguesFireStore } = useSportsTree();

  // UseState
  const [teams, setTeams] = useState([]);
  const [teamInput, setTeamInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  // handleChance
  const handleInputChange = (e) => {
    setTeamInput(e.target.value);
  };

  const handleInputNameInputChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleInputLocationInputChange = (e) => {
    setLocationInput(e.target.value);
  };

  // function

  const onSubmitAddTeams = async () => {
    const newTeam = teamInput;
    if (newTeam) {
      setTeams((prevTeams) => [...prevTeams, newTeam]);
      setTeamInput("");
    }
  };

  const onSubmit = async () => {
    addLeaguesFireStore(nameInput, locationInput, teams);
  };

  const deletedTeam = (indexToDelete) => {
    setTeams((prevTeams) =>
      prevTeams.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="flex flex-col items-center rounded-[8px]">
      <h1 className="text-[2.5em]">create Leagues</h1>
      <div className="flex flex-col w-[80vw] min-w-[465px]">
        <div className="flex">
          <div>
            <div className="flex flex-col m-[13px] mx-[40px]">
              <label className="mb-[6px] text-2xl" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                onChange={handleInputNameInputChange}
                placeholder="name"
                type="text"
                className="bg-[#72706d] text-white w-[249px] h-[35px] text-[1.4em] rounded-md p-2 focus:border-[rgb(115,137,156)] focus:ring-2 focus:ring-[rgb(115,137,156)]
         focus:outline-none transition-all duration-300"
              />
            </div>
            <div className="flex flex-col m-[13px] mx-[40px]">
              <label className="mb-[6px] text-2xl" htmlFor="name">
                Location
              </label>
              <input
                id="location"
                onChange={handleInputLocationInputChange}
                placeholder="name"
                type="text"
                className="bg-[#72706d] text-white w-[249px] h-[35px] text-[1.4em] rounded-md p-2 focus:border-[rgb(115,137,156)] focus:ring-2 focus:ring-[rgb(115,137,156)]
         focus:outline-none transition-all duration-300"
              />
            </div>
          </div>
          <div className="m-[13px] mx-[40px]">
            <div className="flex flex-col ">
              <label className="mb-[6px] text-2xl">Team</label>

              <input
                id="teamInput"
                value={teamInput}
                placeholder="team"
                type="text"
                onChange={handleInputChange}
                className="bg-[#72706d] text-white w-[249px] h-[35px] text-[1.4em] rounded-md p-2 focus:border-[rgb(115,137,156)] focus:ring-2 focus:ring-[rgb(115,137,156)]
         focus:outline-none transition-all duration-300"
              />
              <button
                onClick={onSubmitAddTeams}
                type="button"
                className="w-[98px] h-[41px] bg-[#787168] rounded-[9px] mt-[28px]"
              >
                Add Team
              </button>
            </div>
            <div className="flex max-w-[843px] mt-[30px]  h-[30vh] flex-wrap flex-col">
              {teams.length > 0 ? (
                <>
                  {teams.map((team, index) => (
                    <div
                      key={index}
                      className="bg-[#686349] mt-[10px] mr-[12px] mb-[10px] ml-0  flex justify-around items-center rounded-[8px] relative"
                    >
                      <h3 className="m-[6px_22px]">{team}</h3>
                      <button
                        className="absolute top-0 right-0 m-[2px]"
                        onClick={(e) => {
                          e.preventDefault();
                          deletedTeam(index);
                        }}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className="m-[13px] mx-[40px]">
          <button
            onClick={onSubmit}
            className="w-[98px] h-[41px] bg-[#787168] rounded-[9px] mt-[28px]"
          >
            Add
          </button>
          <button className="w-[98px] h-[41px] rounded-[9px] mt-[28px]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateLeagues;
