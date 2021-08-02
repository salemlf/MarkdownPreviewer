import styled from "styled-components/macro";

import React from "react";

const md = require("markdown-it")().use(require("markdown-it-highlightjs"), {
  inline: true,
});

const MarkdownPreview = ({ markdown }) => {
  return (
    <Wrapper>
      <Heading>Preview</Heading>
      <PreviewContainer
        dangerouslySetInnerHTML={{
          __html: md.render(markdown),
        }}
      ></PreviewContainer>
    </Wrapper>
  );
};

export default MarkdownPreview;

const Heading = styled.h2`
  font-size: 30px;
  color: var(--secondary-text);
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 65vh;
  background: var(--main-container-bg);
  border-radius: 15px;
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
  margin: 0 10px;
`;
