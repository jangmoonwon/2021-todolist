import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";

const Sub = () => {
  const ThemeMode = useTheme();
  const CurrentMode = ThemeMode[0] === "light" ? "🌝" : "🌚";

  return (
    <AppLayout>
      <h2>
        Sub Pages
        <br />
        <ColoredText>{CurrentMode}</ColoredText>
      </h2>
    </AppLayout>
  );
};

export default Sub;

const ColoredText = styled.span`
  color: #e6b74a;
`;