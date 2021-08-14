import React from "react";
import styled from "styled-components/macro";

const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  background: var(--btn-bg);
  color: var(--btn-text);
  border: none;
  border-radius: 3px;
`;
