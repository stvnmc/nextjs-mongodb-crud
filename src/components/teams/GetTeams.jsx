import React from "react";

const GetTeams = ({ value }) => {
  const { team } = value;

  return (
    <div>
      {team ? (
        <div>
          <h1>{team.name}</h1>
          <img
            className="w-[150px] h-[150px] object-cover"
            src={`data:${team.image.contentType};base64,${Buffer.from(
              team.image.data.data
            ).toString("base64")}`}
            alt={team.name}
          />
          <div>
            {team.teams.map((iteam, i) => (
              <h1 key={i}>{iteam}</h1>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GetTeams;
