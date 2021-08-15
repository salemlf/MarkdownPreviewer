import styled from "styled-components/macro";
import React from "react";

import SettingsIcon from "../Icons/settings-icon.svg";
import ExportIcon from "../Icons/export-icon.svg";

const Header = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <ToolsContainer>
          <Settings />
          <Export />
        </ToolsContainer>
        <HamburgerMenu>
          <HamburgerMenuBar />
          <HamburgerMenuBar />
          <HamburgerMenuBar />
        </HamburgerMenu>
      </FlexContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--main-container-bg);
  position: relative;
  top: 0;
`;

const HamburgerMenuBar = styled.div`
  min-width: 15px;
  width: 11vw;
  max-width: 68px;
  min-height: 3px;
  height: 1vw;
  max-height: 9px;
  background-color: var(--highlight-yellow);
  margin: 5px 0;
  border-radius: 2px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// TODO: create component for responsive icon
const Settings = styled.div`
  height: 10vw;
  width: 10vw;
  min-width: 50px;
  min-height: 50px;
  max-width: 75px;
  max-height: 75px;
  background: url(${SettingsIcon});
  background-size: cover;
`;

const Export = styled.div`
  height: 10vw;
  width: 10vw;
  min-width: 50px;
  min-height: 50px;
  max-width: 75px;
  max-height: 75px;
  background: url(${ExportIcon});
  background-size: cover;
`;
