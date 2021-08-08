import React from "react";
import styled from "styled-components/macro";

const MarkdownInput = ({ onChange, markdown }) => {
  return (
    <Wrapper>
      <InputContainer>
        <TitleTab>
          <Title>Input</Title>
        </TitleTab>
        <TextArea onChange={(e) => onChange(e.target.value)}>
          {console.log(markdown)}
        </TextArea>
      </InputContainer>
    </Wrapper>
  );
};

export default MarkdownInput;

const TextArea = styled.textarea`
  position: relative;
  z-index: 2;
  border-radius: 15px 0 15px 15px;
  width: 100%;
  min-height: 400px;
  max-height: 600px;
  resize: none;
  padding: 15px;
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

const TitleTab = styled.div`
  position: absolute;
  z-index: 1;
  width: fit-content;
  height: 10%;
  background: var(--main-container-bg);
  top: -10%;
  right: 0;
  border-radius: 10px 10px 0 0;
  padding: 5px 10px;
`;

const Title = styled.h2`
  /* font-size: 28px; */
  color: var(--secondary-text);
  text-align: center;
  margin: 0;
`;

// TODO: change height
const InputContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  max-height: 600px;
  background: var(--main-container-bg);
  border-radius: 15px 0 15px 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 10px;
`;
