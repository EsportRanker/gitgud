import React from "react";
import styled from "@emotion/styled";
import HamburgerMenu from "./MenuBar";

const HeaderContainer = styled.header`
  display: flex;
  background: #333333;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 75px;
  color: #dddad3;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 5px;
  font-size: 1.25rem;
  box-shadow: 0px 11px 59px -28px rgba(0, 0, 0, 0.75);
`;

const AppTitle = styled.h1`
  margin: 10px;
`;

// const MenuBar = styled.div`
//   position: absolute;
//   background: green;
//   height: 100%;
//   width: 40px;
//   top: 0;
//   right: 0;
//   z-index: 9999;
// `;
export default function Header() {
  return (
    <HeaderContainer>
      <AppTitle>Git Gud</AppTitle>
      <HamburgerMenu />
    </HeaderContainer>
  );
}
