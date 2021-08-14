import React from "react";
import styled from "styled-components/macro";

const Tab = ({ children }) => {
  return <TitleTab>{children}</TitleTab>;
};

export default Tab;

const TitleTab = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 3px 10px;
  height: auto;
  background: var(--main-container-bg);
  top: 0px;
  right: 0px;
  border-radius: 10px 10px 0 0;
  transform: translateY(-100%);
  color: var(--secondary-text);
  text-align: center;
  font-size: var(--secondary-font-size);
  font-weight: var(--secondary-font-weight);
`;
