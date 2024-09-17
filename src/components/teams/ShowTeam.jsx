"use client";
// icons
import { TiDeleteOutline } from "react-icons/ti";
import React, { useEffect, useState } from "react";

const ShowTeam = ({ value }) => {
  const { teamShow, createTeam, getTeam, team } = value;
  const [players, setPlayers] = useState([]);
  const [playerInput, setPlayersInput] = useState("");
  const [imageInput, setImageInput] = useState(null);
  const [imageInputShow, setImageInputShow] = useState(null);

  // Fuction
  const onSubmit = async () => {
    const res = await createTeam(
      teamShow.nameTeam,
      teamShow.league,
      players,
      imageInput
    );

    console.log(res);
    if (!res) return;

    setImageInputShow(null);
    setPlayers([]);
  };

  const handleInputChange = (e) => {
    setPlayersInput(e.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageInputShow(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      setImageInput({
        data: Array.from(new Uint8Array(reader.result)),
        contentType: file.type,
      });
    };

    reader.readAsArrayBuffer(file);
  };

  const onSubmitAddPlayers = async () => {
    const newTeam = playerInput;
    if (newTeam) {
      setPlayers((prevTeams) => [...prevTeams, newTeam]);
      setPlayersInput("");
    }
  };

  // UseEffect
  useEffect(() => {
    getTeam(teamShow.nameTeam);
  }, [teamShow]);

  useEffect(() => {
    console.log(team);
  }, [team]);

  return (
    <div>
      <div>
        {team ? (
          <div>
            <h1>{team.name}</h1>
            <h1>{team.league}</h1>
            <h1>
              {team.players ? (
                <div>
                  <h1> playeres</h1>
                  {team.players.map((iteam, i) => (
                    <h2 key={i}>{iteam}</h2>
                  ))}
                </div>
              ) : (
                <div>no existe players</div>
              )}
            </h1>
          </div>
        ) : (
          <div>
            <h1>{teamShow.nameTeam}</h1>
            <h2>{teamShow.league}</h2>
          </div>
        )}
      </div>
      <div>
        <div>
          <input type="file" onChange={handleImageChange} />
          {imageInputShow ? (
            <img src={URL.createObjectURL(imageInputShow)} alt="" />
          ) : null}

          <div className="flex flex-col ">
            <label className="mb-[6px] text-2xl">player</label>
            <input
              id="playerInput"
              value={playerInput}
              placeholder="player"
              type="text"
              onChange={handleInputChange}
              className="bg-[#72706d] text-white w-[249px] h-[35px] text-[1.4em] rounded-md p-2 focus:border-[rgb(115,137,156)] focus:ring-2 focus:ring-[rgb(115,137,156)]
         focus:outline-none transition-all duration-300"
            />
            <button
              onClick={onSubmitAddPlayers}
              type="button"
              className="w-[98px] h-[41px] bg-[#787168] rounded-[9px] mt-[28px]"
            >
              Add Player
            </button>
          </div>
          <div className="flex max-w-[843px] mt-[30px]  h-[30vh] flex-wrap flex-col">
            {players.length > 0 ? (
              <>
                {players.map((team, index) => (
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
          <button onClick={onSubmit}>fishis</button>
        </div>
      </div>
    </div>
  );
};

export default ShowTeam;
