import React from "react";
import styled from "styled-components";

export const Modal = ({ children, closeModal }) => {
  return (
    <Wrapper>
      <div>
        <button onClick={closeModal}>close</button>
        <div>{children}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  position: fixed;
  inset: 0;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  > div {
    width: 40vw;
    height: 40vh;
    padding: 10px;
    background-color: white;
  }
`;
