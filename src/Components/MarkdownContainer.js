import React from "react";
import styled from "styled-components/macro";

const MarkdownContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MarkdownContainer;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 40px 20px;
`;
