import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin-bottom: 10px;
`;
export default function Add() {
  const [name, setName] = React.useState("");
  const [gameName, setGameName] = React.useState("");
  const [teamID, setTeamID] = React.useState(1);
  const [teamName, setTeamName] = React.useState([]);
  async function handleSubmit(event) {
    await fetch("http://localhost:3002/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        teamid: parseInt(teamID),
        gameid: 1,
        name: name,
        nationality: "german"
      })
    });
    setName("");
    setGameName("");
    setTeamName("");
  }

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3002/teams");
      const data = await response.json();
      console.log(data);
      setTeamName(data);
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
      <Input
        autoFocus
        type="text"
        placeholder="Game Name"
        value={gameName}
        onChange={event => setGameName(event.target.value)}
      />

      <select
        name="team"
        size="1"
        onChange={event => {
          setTeamID(event.target.value);
        }}
      >
        {teamName.map(teamData => {
          return (
            <option key={teamData.id} value={teamData.id}>
              {teamData.name}
            </option>
          );
        })}
      </select>
      <button>Submit</button>
    </Form>
  );
}
