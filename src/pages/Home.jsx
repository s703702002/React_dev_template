import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Todo from "../container/Todo";

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: red;
`;

const Button = styled.button`
  background-color: bule;
  padding: 1em;
  border-radius: 7px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>Hello Stanley</Title>
      <Paragraph>321123</Paragraph>
      <Button>click!</Button>
      <Todo />
      <Link to="/pagetwo">page2</Link>
    </Wrapper>
  );
};

export default Home;
