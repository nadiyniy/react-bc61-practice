import React, { Suspense } from "react";
import { Navigate, Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  if (!true) {
    return <Navigate to="/login" />;
  }
  return (
    <StyledWrapper>
      <h1>Welcome are in page About!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
        officiis, ipsam labore ipsum commodi sunt magni velit nobis magnam
        nesciunt error voluptas quasi? Id perferendis itaque earum cupiditate
        magni incidunt?
      </p>

      <StyledLink to="company">Info about company</StyledLink>
      <StyledLink to="mission">About our mission</StyledLink>
      <Suspense>
        <Outlet />
      </Suspense>
    </StyledWrapper>
  );
};

export default About;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: blue;
  }
`;
