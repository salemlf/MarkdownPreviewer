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
  padding: 10px;
`;

const HamburgerMenuBar = styled.div`
  min-width: 15px;
  width: 15vw;
  max-width: 75px;
  min-height: 3px;
  height: 1vw;
  max-height: 10px;
  /* width: 75px;
  height: 10px; */
  background-color: var(--highlight-yellow);
  margin: 5px 0;
  border-radius: 2px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  min-width: 50px;
  width: 10vw;
  max-width: 100px;
  min-height: 50px;
  height: 10vw;
  max-height: 100px;
  background: url(${SettingsIcon});
  background-size: cover;
`;

const Export = styled.div`
  min-width: 50px;
  width: 10vw;
  max-width: 100px;
  min-height: 50px;
  height: 10vw;
  max-height: 100px;
  background: url(${ExportIcon});
  background-size: cover;
`;
