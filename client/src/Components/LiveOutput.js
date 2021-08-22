import React, { useState } from "react";
import styled from "styled-components/macro";
import MarkdownContainer from "./MarkdownContainer";
import EditableIFrame from "./EditableIFrame";

const md = require("markdown-it")().use(require("markdown-it-highlightjs"), {
  inline: true,
});

const LiveOutput = () => {
  const [input, setInput] = useState("");
  const [markdown, setMarkdown] = useState("");

  const CheckInput = (enteredData) => {
    // setTimeout(() => {
    let rendered = md.render(enteredData);
    // *testing
    console.log("rendered: ", rendered);
    // *testing
    // }, 1000);
    setInput(rendered);
  };

  const HandleInput = (enteredData) => {
    // *testing
    console.log("Entered data: ", enteredData);
    // *testing
    setInput(enteredData);
    CheckInput(enteredData);
  };
  return (
    <MarkdownContainer>
      <EditableContainer>
        <EditableIFrame></EditableIFrame>
      </EditableContainer>
    </MarkdownContainer>
  );
};

const EditableContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  border-radius: 15px;
`;

const EditableFrame = styled.iframe`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 400px;
  max-height: 600px;
  background: var(--main-container-bg);
  border-radius: 15px 0 15px 15px;
  padding: 10px 15px;
  color: var(--main-text);
  overflow-y: auto;
`;

export default LiveOutput;
