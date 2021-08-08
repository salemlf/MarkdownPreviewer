import React, { useState } from "react";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import MarkdownInput from "./MarkdownInput";
import MarkdownPreview from "./MarkdownPreview";
import Button from "./Button";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  return (
    <AppContainer>
      <header className="App-header"></header>
      <MarkdownPageHeading>Markdown Previewer</MarkdownPageHeading>
      <InputPreviewContainer>
        <MarkdownInput onChange={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </InputPreviewContainer>
      {/* testing button styles, remove later */}
      {/* <Button>TESTING</Button> */}
      <GlobalStyles />
    </AppContainer>
  );
};

export default App;

const InputPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  /* height: 700px; */
  margin: 0 auto;
  @media only screen and (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

const MarkdownPageHeading = styled.h1`
  text-align: center;
  color: var(--main-text);
`;

const AppContainer = styled.div`
  min-height: 100vh;
`;
