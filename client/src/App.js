import React, { useState } from "react";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import MarkdownInput from "./Components/MarkdownInput";
import MarkdownPreview from "./Components/MarkdownPreview";
import Button from "./Components/Button";
import Header from "./Components/Header";

// TODO: add other export options
//exports HTML with temporary ugly button
function handleClick(e) {
  e.preventDefault();
  console.log("CLICKED");
  let a = document.body.appendChild(document.createElement("a"));
  a.download = "myMarkdown.html";
  a.href = "data:text/html," + document.getElementById("markup").innerHTML;
  a.click();
}

function App() {
  const [data, setData] = React.useState(null);
  const [markdown, setMarkdown] = useState("");

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

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
        <button onClick={handleClick}>TESTING</button>
        {/* testing server */}
        <p>{!data ? "Loading..." : data}</p>
      </PageContent>
      <GlobalStyles />
    </AppContainer>
  );
}

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

export default App;
