import styled from "styled-components/macro";

import React from "react";

const md = require("markdown-it")().use(require("markdown-it-highlightjs"), {
  inline: true,
});

const MarkdownPreview = ({ markdown }) => {
  return (
    <Wrapper>
      <PreviewContainer>
        <TitleTab>
          <Title>Preview</Title>
        </TitleTab>
        <PreviewMarkup
          id="markup"
          dangerouslySetInnerHTML={{
            __html: md.render(markdown),
          }}
        ></PreviewMarkup>
      </PreviewContainer>
    </Wrapper>
  );
};

export default MarkdownPreview;

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
  color: var(--secondary-text);
  text-align: center;
  margin: 0;
`;

const PreviewContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  border-radius: 15px;
  /* padding: 10px 15px; */
`;

const PreviewMarkup = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 400px;
  max-height: 600px;
  /* height: 65vh; */
  background: var(--main-container-bg);
  border-radius: 15px 0 15px 15px;
  padding: 10px 15px;
  color: var(--main-text);
  overflow-y: auto;

  /* TODO: move into global styles */

  & pre {
    background: hsl(208deg, 67%, 16%);
    padding: 10px;
    margin-left: 1rem;
    border-radius: 10px;
  }

  & pre span {
    line-height: 2;
  }

  & .hljs {
    font-family: "Nanum Gothic Coding", monospace;
    font-weight: 700;
  }

  & .hljs-built_in,
  .hljs-selector-tag,
  .hljs-function,
  .hljs-tag,
  .hljs-emphasis {
    color: var(--highlight-light-blue);
  }

  & .hljs-keyword,
  .hljs-selector-class,
  .hljs-attr,
  h1 {
    color: var(--highlight-yellow);
  }

  & .hljs-string,
  .hljs-regexp,
  .hljs-code,
  .hljs-selector-pseudo,
  a {
    color: var(--highlight-pink);
  }

  /* TODO: add colors to variables */
  & .hljs-title,
  .hljs-number,
  .hljs-link {
    color: #286ac1;
  }

  & .hljs-comment,
  .hljs-strong {
    color: #824f9e;
  }

  & .hljs-literal,
  .hljs-class,
  .hljs-type,
  .hljs-meta-keyword,
  .hljs-doctag,
  .hljs-bullet,
  .hljs-attribute,
  li::marker {
    color: #d47b63;
  }

  & .hljs-name,
  .hljs-meta,
  .hljs-variable,
  .hljs-class .hljs-title,
  .hljs-selector-attr {
    color: #af428c;
  }

  & .hljs-subst,
  .hljs-class .hljs-keyword,
  .hljs-symbol {
    color: #49d9fd;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px 10px;
`;
