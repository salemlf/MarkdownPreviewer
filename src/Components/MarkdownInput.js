import React from "react";
import styled from "styled-components/macro";
import MarkdownContainer from "./MarkdownContainer";
import Tab from "./Tab";

const MarkdownInput = ({ onChange, markdown }) => {
  return (
    <MarkdownContainer>
      <InputContainer>
        <Tab>Input</Tab>
        <TextArea onChange={(e) => onChange(e.target.value)}></TextArea>
      </InputContainer>
    </MarkdownContainer>
  );
};

export default MarkdownInput;

const TextArea = styled.textarea`
  position: relative;
  z-index: 2;
  border-radius: 15px 0 15px 15px;
  width: 100%;
  height: 500px;
  resize: none;
  padding: 15px;
  border-color: var(--highlight-light-blue);
  background: var(--main-container-bg);
  font-size: var(--text-area-font-size);
  color: var(--main-text);
  border: 2px solid transparent;
  :focus {
    outline: none;
    border: 2px solid var(--highlight-light-blue);
    box-shadow: 0 0 8px var(--highlight-light-blue);
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: var(--main-container-bg);
  border-radius: 15px 0 15px 15px;
`;
