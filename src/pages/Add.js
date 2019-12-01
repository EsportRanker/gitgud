import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
  height: 40px;
  padding-left: 10px;
  border-radius: 15px;
  font-size: 25px;
`;
const Select = styled.select`
  width: 80%;
  font-size: 23px;
  text-align: center;
  border: none;
  appearance: none;
  margin-bottom: 10px;
  text-align-last: center;
`;
const Label = styled.label`
  font-size: 20px;
`;

const Submit = styled.button`
  height: 40px;
  width: 100px;
  background-color: #333;
  color: #d3531a;
  font-size: 27px;
  text-align: center;
  border-radius: 8px;
  border: none;
  text-shadow: 0px 0px 2px #d35300;
  box-shadow: inset 1px 1px 3px #969696;
`;
export default function Add() {
  const [name, setName] = React.useState("");
  const [gameName, setGameName] = React.useState(1);
  const [teamID, setTeamID] = React.useState(1);
  const [teamNameList, setTeamNameList] = React.useState([]);
  const [gameNameList, setGameNameList] = React.useState([]);

  async function handleSubmit(event) {
    await fetch("http://localhost:3002/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        teamid: parseInt(teamID),
        gameid: parseInt(gameName),
        name: name,
        nationality: "🇧🇬"
      })
    });
    setName("");
    setGameName("");
    setTeamNameList("");
  }

  React.useEffect(() => {
    async function fetchData() {
      const teamResponse = await fetch("http://localhost:3002/teams");
      const teamData = await teamResponse.json();
      const gameResponse = await fetch("http://localhost:3002/games");
      const gameData = await gameResponse.json();
      setTeamNameList(teamData);
      setGameNameList(gameData);
    }
    fetchData();
  }, []);
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        autoFocus
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <Label for="game">Game:</Label>
      <Select
        name="game"
        size="1"
        onChange={event => {
          setGameName(event.target.value);
        }}
      >
        {gameNameList.map(gameName => {
          return (
            <option key={gameName.id} value={gameName.id}>
              {gameName.name}
            </option>
          );
        })}
      </Select>
      <Label for="team">Team:</Label>
      <Select
        name="team"
        size="1"
        onChange={event => {
          setTeamID(event.target.value);
        }}
      >
        {teamNameList.map(teamData => {
          return (
            <option key={teamData.id} value={teamData.id}>
              {teamData.name}
            </option>
          );
        })}
      </Select>
      <Submit>Submit</Submit>
    </Form>
  );
}
