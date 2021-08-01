import styled from "styled-components/macro";

import React from "react";

const MarkdownPreview = () => {
  return (
    <Wrapper>
      <Heading>Preview</Heading>
      <PreviewContainer></PreviewContainer>
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
  height: 500px;
  background: var(--main-container-bg);
  border-radius: 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 10px;
`;
