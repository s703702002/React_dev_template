import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const Paragraph =  styled.p`
  font-size: 1.2em;
  color: red;
`;

const Button = styled.button`
  background-color: bule;
  padding: 1em;
  border-radius: 8px;
`

const App = () => {
  return (
    <Wrapper>
      <Title>
        Hello World!
      </Title>
      <Paragraph>haha</Paragraph>
      <Paragraph>yoyo</Paragraph>
      <Paragraph>cool chill man</Paragraph>
      <Button>click me</Button>
    </Wrapper>
  );
}

export default App;