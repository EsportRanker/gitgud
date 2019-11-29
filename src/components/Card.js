import React from "react";

import styled from "@emotion/styled";
import Roster from "./Roster";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 300px;
  background: #143d55;
  margin: auto;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px grey;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 10px;
  border-bottom: 2px solid grey;
  width: 100%;
  height: 30%;
`;

const CornerInfo = styled.span`
  width: 40px;
  height: 40px;
  border-radius: ${({ direction }) =>
    direction === "left" ? "10px 0 0 0 " : "0 10px 0 0 "};
  font-size: 40px;
  padding-left: 3px;
  padding-right: 3px;
`;

const ImgContainer = styled.div`
  display: inline-block;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 100%;
  padding-top: 5px;
`;
const RosterList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
`;

// const TeamTitle = styled.h3`
//   margin: 0;
//   color: #dddad3;
//   width: 100%;
//   text-align: center;
//   border-bottom: 2px solid grey;
//   padding-bottom: 10px;
// `;

export default function Cards({ nationality, image, rosterid }) {
  const [players, setPlayers] = React.useState([]);

  // async function getPlayers() {
  //   const response = await fetch("http://localhost:3002/players");
  //   const data = await response.json();
  //   console.log(data);
  //   setPlayers(data);
  // }

  React.useEffect(() => {
    async function getPlayers() {
      const response = await fetch("http://localhost:3002/players");
      const data = await response.json();
      console.log(data);
      setPlayers(data);
    }
    getPlayers();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CornerInfo direction="left">{nationality}</CornerInfo>
        <ImgContainer>
          <Image src={image} />
        </ImgContainer>
        <CornerInfo direction="right" input="region"></CornerInfo>
      </CardHeader>
      <RosterList>
        {players.map(player => {
          if (player.teamid === rosterid) {
            return (
              <Roster name={player.name} nationality={player.nationality} />
            );
          }
        })}
      </RosterList>
    </Card>
  );
}
