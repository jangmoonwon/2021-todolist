import React from "react";
import styled from "styled-components";

export default function TodoList() {
  return (
    <Container>
      <p>Todo list</p>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  /* background: skyblue; */
`;
