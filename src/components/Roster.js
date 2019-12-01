import React from "react";
import styled from "@emotion/styled";

const Player = styled.p`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

export default function Roster({ name, nationality }) {
  return (
    <Player>
      {name} <span>{nationality}</span>
    </Player>
  );
}
