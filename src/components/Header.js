import React from "react";
import styled from "@emotion/styled";

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

const BurgerMenu = styled.div`
  margin: 10px;
  width: 60px;
  height: 45px;
  cursor: pointer;
`;

const Span = styled.span`
  display: block;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  margin-bottom: 7px;
`;

const AppTitle = styled.h1`
  margin: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <AppTitle>Git Gud</AppTitle>
      <BurgerMenu>
        <Span></Span>
        <Span></Span>
        <Span></Span>
      </BurgerMenu>
    </HeaderContainer>
  );
}
