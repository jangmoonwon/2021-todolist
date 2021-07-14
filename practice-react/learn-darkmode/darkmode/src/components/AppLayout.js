import React from "react";
import styled from "styled-components";
// import { FlexContainer } from "../style/styles";
import { useTheme } from "../context/themeProvider";
import ThemeToggle from "../theme/themeToggle";

const AppLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <Container>
          <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
              Dark Mode
          </ThemeToggle>
          <FlexContainer>
              {children}
          </FlexContainer>
    </Container>
  );
};

export default AppLayout;

const Container = styled.main`
  min-height: 100%;
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0px 28px;
  transition: all 0.2s linear;
  width: calc(100%-2rem);
  height: 90vh;
  & h2 {
    font-size: 48px;
    font-weight: 500;
    padding-bottom: 40px;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
  }
`;