import React from "react";
import styled, { css, keyframes } from "styled-components";

function Spinner() {
  return (
    <Container>
      <Text>Loading</Text>
      <SpinnerBox>
        <Dot1 bounce />
        <Dot2 bounce />
        <Dot3 bounce />
      </SpinnerBox>
    </Container>
  );
}

export default Spinner;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SpinnerBox = styled.div`
  margin: 0 auto;
  width: 40px;
  height: 40px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Dot1 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #c70102;
  border-radius: 100%;
  ${(props) =>
    props.bounce &&
    css`
      animation: ${Bounce} 2s infinite ease-in-out;
    `};
  animation-delay: 0.5s;
`;

const Dot2 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0 auto;
  left: -10px;
  background-color: #c70102;
  border-radius: 100%;
  ${(props) =>
    props.bounce &&
    css`
      animation: ${Bounce} 2s infinite ease-in-out;
    `};
  animation-delay: 1.5s;
`;

const Dot3 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 50px;
  background-color: #c70102;
  border-radius: 100%;
  ${(props) =>
    props.bounce &&
    css`
      animation: ${Bounce} 2s infinite ease-in-out;
    `};
  animation-delay: 2s;
`;

const Text = styled.div`
  display: inline-block;
  position: relative;
  bottom: 50px;
`;

const Bounce = keyframes`
  0%, 100% {
    transform: scale(0.2);
  }
  
  
  50% {
    transform: scale(1.0);
  }
  `;
