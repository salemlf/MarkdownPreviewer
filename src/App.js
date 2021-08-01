import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import MarkdownInput from "./MarkdownInput";
import MarkdownPreview from "./MarkdownPreview";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MarkdownPageHeading>Markdown Previewer</MarkdownPageHeading>
      <InputPreviewContainer>
        <MarkdownInput />
        <MarkdownPreview />
      </InputPreviewContainer>
      {/* testing button styles, remove later */}
      <Button>TESTING</Button>
      <GlobalStyles />
    </div>
  );
}

export default App;

const InputPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 700px;
  margin: 0 auto;
  @media only screen and (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

const MarkdownPageHeading = styled.h1`
  text-align: center;
  color: var(--main-text);
`;
