import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const year = new Date().getFullYear() + "년" + " ";
const month = new Date().getMonth() + 1 + "월" + " ";
const day = new Date().getDate() + "일";
const today = [year, month, day];

const week = new Date();
const weekarr = new Array();
weekarr[0] = "일요일";
weekarr[1] = "월요일";
weekarr[2] = "화요일";
weekarr[3] = "수요일";
weekarr[4] = "목요일";
weekarr[5] = "금요일";
weekarr[6] = "토요일";

const weekday = weekarr[week.getDay()];




export default function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <Container>
      <StyledToday>
        {today} {weekday}
      </StyledToday>
      <TodoText>{undoneTasks.length}개 남음</TodoText>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 40px 30px 32px;
  border-bottom: 1px solid #dfe6e9;
`;

const StyledToday = styled.h1`
  font-size: 35px;
`;

const TodoText = styled.text`
  font-size: 20px;
  font-weight: 500;
  color: #16a085;
`;
