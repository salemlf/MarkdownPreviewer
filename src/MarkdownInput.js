import styled from "styled-components/macro";

import React from "react";

const MarkdownInput = () => {
  return (
    <Wrapper>
      <Heading>Input</Heading>
      <InputContainer>
        <TextArea></TextArea>
      </InputContainer>
    </Wrapper>
  );
};

export default MarkdownInput;

const TextArea = styled.textarea`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  resize: none;
  padding: 10px;
  border-color: var(--highlight-yellow);
  background: var(--main-container-bg);
  color: var(--main-text);
  :focus {
    outline: none !important;
    border: 2px solid var(--highlight-yellow);
    box-shadow: 0 0 8px var(--highlight-yellow);
  }
`;

const Heading = styled.h2`
  font-size: 30px;
  color: var(--secondary-text);
`;

const InputContainer = styled.div`
  width: 100%;
  height: 500px;
  background: var(--main-container-bg);
  border-radius: 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 10px;
`;
