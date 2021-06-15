import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import { useTodoState } from "./TodoContext";

export default function TodoList() {
  const todos = useTodoState();

  return (
    <Container>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;
