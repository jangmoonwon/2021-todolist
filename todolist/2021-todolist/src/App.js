import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./components/TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #dfe6e9;
  }
`;

export default function App() {
  return (
    <TodoProvider>
      <Container>
        <GlobalStyle />
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </Container>
    </TodoProvider>
  );
}

const Header = styled.div`
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  position: relative;
`;
