import React, { useState } from "react";
import styled from "styled-components/macro";
import { io } from "socket.io-client";
import GlobalStyles from "./GlobalStyles";
import MarkdownInput from "./Components/MarkdownInput";
import MarkdownPreview from "./Components/MarkdownPreview";
import Button from "./Components/Button";
import Header from "./Components/Header";
import LiveOutput from "./Components/LiveOutput";

// *testing
const socket = io({
  query: {
    x: 42,
  },
});
// *testing

// TODO: add other export options, done in less gross way
//exports HTML with temporary ugly button
function handleClick(e) {
  e.preventDefault();
  // *testing
  console.log("CLICKED");
  // *testing
  let a = document.body.appendChild(document.createElement("a"));
  a.download = "myMarkdown.html";
  a.href = "data:text/html," + document.getElementById("markup").innerHTML;
  a.click();
}

socket.on("hello", (arg) => {
  // *testing
  console.log(arg); // responds with world
  // *testing
});

socket.on("serverMessage", (message) => {
  // *testing
  console.log(message);
  // *testing
});

function App() {
  const [markdown, setMarkdown] = useState("");
  const [text, setText] = useState("");

  //! example of retrieving API data
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // *testing
  const sendData = () => {
    // *testing
    console.log("markdown: ", markdown);
    // *testing
    if (markdown !== "") {
      socket.emit("markdown", markdown);
    }
  };

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
        {/* <button onClick={sendData}>TESTING</button> */}
        {/*TODO: testing live output, uncomment */}
        {/* <LiveOutput></LiveOutput> */}
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
