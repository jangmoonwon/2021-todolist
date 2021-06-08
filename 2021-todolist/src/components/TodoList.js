import React from "react";
import styled from "styled-components";
import TodoListItem from './TodoListItem';

export default function TodoList() {
  return (
    <Container>
      <TodoListItem text="프로젝트 생성하기" done={true} />
      <TodoListItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoListItem text="Context 만들기" done={false} />
      <TodoListItem text="기능 구현하기" done={false} />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;
