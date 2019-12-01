import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const BurgerMenu = styled.div`
  margin: 10px;

  width: 40px;
  height: 20px;
  cursor: pointer;
`;
const Span = styled.span`
  display: block;
  height: 5px;

  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  margin-bottom: 7px;
`;
const ExitSpan = styled.span`
  display: block;
  height: 5px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  margin-bottom: 7px;
  transform: translate(20px, 40px);
  transform: ${({ direction }) =>
    direction === "left"
      ? "rotate(-45deg) translate(-8px)"
      : "rotate(45deg) translate(-9px)"};
`;
const Menu = styled.div`
  position: absolute;
  background: #333;
  height: 100%;

  width: 30%;

  top: 0;
  right: 0;
  z-index: 9999;
`;

const RouterLink = styled(Link)`
  margin-top: 20px;
  color: #d3531a;
  text-decoration: none;
`;
const MenuContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 18px;

`;
function MenuBar({ onClick }) {
  return (
    <Menu>
      <MenuContentContainer>
        <BurgerMenu onClick={() => onClick()}>

          <ExitSpan direction="left"></ExitSpan>

          <ExitSpan direction="right"></ExitSpan>
        </BurgerMenu>
        <RouterLink
          onClick={() => {
            onClick();
          }}
          to="/"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/add"
          onClick={() => {
            onClick();
          }}
        >
          Add
        </RouterLink>
      </MenuContentContainer>
    </Menu>
  );
}
export default function HamburgerMenu() {
  const [showMenu, setShowMenu] = React.useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <BurgerMenu
        onClick={() => {
          handleClick();
        }}
      >
        <Span></Span>
        <Span></Span>
        <Span></Span>
      </BurgerMenu>
      {showMenu && <MenuBar onClick={handleClick} />}
    </>
  );
}
