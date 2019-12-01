import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
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
const Menu = styled.div`
  position: absolute;
  background: #333;
  height: 100%;
  width: 40%;
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

  margin-top: 6px;
`;
function MenuBar({ onClick }) {
  return (
    <Menu>
      <MenuContentContainer>
        <BurgerMenu onClick={() => onClick()}>
          <Span></Span>
          <Span></Span>
          <Span></Span>
        </BurgerMenu>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/add">Add</RouterLink>
      </MenuContentContainer>
    </Menu>
  );
}
export default function HamburgerMenu() {
  const [showMenu, setShowMenu] = React.useState(true);
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
