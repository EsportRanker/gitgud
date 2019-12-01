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
  const [teamName, setTeamName] = React.useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:3002/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, gameName, teamName })
    });
    setName("");
    setGameName("");
    setTeamName("");
  }

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
      <Input
        autoFocus
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={event => setTeamName(event.target.value)}
      />
      <button>Submit</button>
    </Form>
  );
}
