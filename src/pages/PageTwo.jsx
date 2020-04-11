import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  color: palevioletred;
  font-size: 1.5em;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: blue;
`;

const PageTwo = () => {
  return (
    <Wrapper>
      <Title>Hello Stanley</Title>
      <Paragraph>I am page 2</Paragraph>
      <Link to="/">Home</Link>
      <br />
      <Link to="/aavvb">Not Found page</Link>
      <br />
      <Link to="/redirect">redirect to Home</Link>
    </Wrapper>
  );
};

export default PageTwo;
