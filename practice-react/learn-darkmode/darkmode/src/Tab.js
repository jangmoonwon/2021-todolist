import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Tab() {
  return (
    <Container>
      <LinkButton exact to="/">
        Main
      </LinkButton>
      <LinkButton to="/sub">Sub</LinkButton>
    </Container>
  );
}

export default Tab;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  width: 100%;
  background: #c70102;
`;

const LinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin: auto;
  text-decoration: none;
  color: #ffffff;
  font-size: 27px;
  font-weight: 600;
  &:hover {
    color: #eb4559;
  }
  &.active {
    color: #000000;
  }
`;
