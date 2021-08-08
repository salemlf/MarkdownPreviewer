import React, { useState } from "react";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import MarkdownInput from "./MarkdownInput";
import MarkdownPreview from "./MarkdownPreview";
import Button from "./Button";
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
        {/* testing button styles, remove later */}
        {/* <Button>TESTING</Button> */}
      </PageContent>
      <GlobalStyles />
    </AppContainer>
  );
};

export default App;

const InputPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  @media only screen and (max-width: 1100px) {
    flex-wrap: wrap;
  }
  margin-top: 50px;
`;

const MarkdownPageHeading = styled.h1`
  text-align: center;
  color: var(--main-text);
`;

const AppContainer = styled.div`
  min-height: 100vh;
`;

const PageContent = styled.div`
  width: 100%;
  margin: 30px auto;
`;
