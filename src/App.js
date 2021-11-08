import React, { useState } from "react";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import MarkdownInput from "./Components/MarkdownInput";
import MarkdownPreview from "./Components/MarkdownPreview";
import Button from "./Components/Button";
import Header from "./Components/Header";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <AppContainer>
      <Header></Header>
      <PageContent>
        <MarkdownPageHeading>Markdown Previewer</MarkdownPageHeading>
        <InputPreviewContainer>
          <MarkdownInput onChange={setMarkdown} />
          <MarkdownPreview markdown={markdown} />
        </InputPreviewContainer>
      </PageContent>
      <GlobalStyles />
    </AppContainer>
  );
};

export default App;

const InputPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  margin: 20px auto;
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

const PageContent = styled.div`
  width: 95%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  flex: 1 1 0%;
  max-width: 100vw;
  overflow: hidden;
`;
