import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";


const GlobalStyle = createGlobalStyle`
  body {
    background: #dfe6e9;
  }
`;

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <TodoHead />
      <TodoList />
    </Container>
  );
}

const Header = styled.div`
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  position: relative;
`;
