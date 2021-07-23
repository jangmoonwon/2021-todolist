import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";
import Spinner from "./Spinner";

const Loading = () => {
  const ThemeMode = useTheme();

  return (
    <AppLayout>
      <Spinner />
    </AppLayout>
  );
};

export default Loading;

const ColoredText = styled.span`
  color: #e6b74a;
`;
