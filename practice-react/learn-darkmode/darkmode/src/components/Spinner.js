import React from "react";
import styled, { css, keyframes } from "styled-components";

function Spinner() {
  return (
    <Container>
      <Content>
        <StyledSpinner EffectRotate />
      </Content>
      <StyledText>Loading</StyledText>
    </Container>
  );
}

export default Spinner;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.div`
  margin: 20px;
  font-size: 30px;
`;

const StyledSpinner = styled.div`
  width: 100px;
  height: 100px;
  background-color: transparent;
  border: 8.5px solid #c70102;
  border-radius: 50%;
  border-top-color: rgba(209, 205, 205, 0.6);
  border-bottom-color: rgba(209, 205, 205, 0.6);
  border-right-color: rgba(209, 205, 205, 0.6);
  ${(props) =>
    props.EffectRotate &&
    css`
      animation: ${EffectA} 2000ms infinite;
    `};
`;

const EffectA = keyframes`
0% {
   transform: rotate(0deg);
 }
 100% {
   transform: rotate(360deg);
 }
`;
