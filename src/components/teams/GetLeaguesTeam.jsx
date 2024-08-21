import React from "react";

const GetLeaguesTeam = ({ value }) => {
    
  const { leagues, showTeams } = value;

  return (
    <>
      {leagues ? (
        <div className="w-[800px] flex flex-wrap justify-center ">
          {leagues.map((iteam, i) => (
            <div
              key={i}
              onClick={() => showTeams(iteam._id)}
              className="m-[15px] cursor-pointer"
            >
              {iteam.image && iteam.image.data && (
                <img
                  className="w-[150px] h-[150px] object-cover"
                  src={`data:${iteam.image.contentType};base64,${Buffer.from(
                    iteam.image.data.data
                  ).toString("base64")}`}
                  alt={iteam.name}
                />
              )}
              <div>{iteam.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default GetLeaguesTeam;
