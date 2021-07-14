import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";

const Main = () => {
  const ThemeMode = useTheme();
  const CurrentMode = ThemeMode[0] === "light" ? "🌝" : "🌚";
  const Mode =
    ThemeMode[0] === "light"
      ? "Light모드 실행 중 입니다"
      : "Dark모드 실행 중 입니다";

  return (
    <AppLayout>
      <h2>
        Hello World
        <br />
        <ColoredText>{CurrentMode}</ColoredText>
        <br />
        <ColoredText>{Mode}</ColoredText>
      </h2>
    </AppLayout>
  );
};

export default Main;

const ColoredText = styled.span`
  color: #e6b74a;
`;
