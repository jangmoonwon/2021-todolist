import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import Sub from "../components/Sub";
import Error from "../components/Error";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  width: 100%;
`;

const RootRouter = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sub" component={Sub} />
        <Route component={Error} />
      </Switch>
    </Container>
  );
};

export default RootRouter;
