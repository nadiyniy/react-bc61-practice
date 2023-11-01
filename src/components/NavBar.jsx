import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <nav>
      <StyleWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/posts">Posts</StyledLink>
      </StyleWrapper>
    </nav>
  );
};

const StyleWrapper = styled.ul`
  display: flex;
  gap: 20px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: blue;
  }
`;
