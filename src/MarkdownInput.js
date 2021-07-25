import styled from "styled-components/macro";

import React from "react";

const MarkdownInput = () => {
  return (
    <Wrapper>
      <Heading>Input</Heading>
      <InputContainer></InputContainer>
    </Wrapper>
  );
};

export default MarkdownInput;

const Heading = styled.h2`
  font-size: 30px;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 500px;
  background: hsl(60deg, 100%, 100%);
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 10px;
`;
