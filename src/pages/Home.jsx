import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  const onClick = () => {};

  return (
    <Wrapper>
      <Title>Hello Stanley</Title>
      <Paragraph>Home page</Paragraph>
      <Button onClick={onClick}>click!</Button>

      <Link to="/pagetwo">page two</Link>
    </Wrapper>
  );
};

export default Home;
