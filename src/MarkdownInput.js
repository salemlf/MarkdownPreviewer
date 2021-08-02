import React from "react";
import styled from "styled-components/macro";

const MarkdownInput = ({ onChange, markdown }) => {
  return (
    <Wrapper>
      <Heading>Input</Heading>
      <InputContainer>
        <TextArea onChange={(e) => onChange(e.target.value)}>
          {console.log(markdown)}
        </TextArea>
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
  border-color: var(--highlight-light-blue);
  background: var(--main-container-bg);
  color: var(--main-text);
  border: 2px solid transparent;
  :focus {
    outline: none;
    border: 2px solid var(--highlight-light-blue);
    box-shadow: 0 0 8px var(--highlight-light-blue);
  }

  /* firefox */
  ::-moz-selection {
    color: var(--highlight-med-blue);
    background: var(--highlight-yellow);
  }

  /* other browsers */
  ::selection {
    color: var(--highlight-med-blue);
    background: var(--highlight-yellow);
  }
`;

const Heading = styled.h2`
  font-size: 30px;
  color: var(--secondary-text);
`;

const InputContainer = styled.div`
  width: 100%;
  height: 65vh;
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
