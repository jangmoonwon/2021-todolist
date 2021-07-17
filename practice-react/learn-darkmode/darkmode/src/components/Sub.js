import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";
import Spinner from './Spinner';

const Sub = () => {
  const ThemeMode = useTheme();
  const CurrentMode = ThemeMode[0] === "light" ? "🌝" : "🌚";

  return (
    <AppLayout>
      <h2>
      <Spinner />
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