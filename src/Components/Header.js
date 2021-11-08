import styled from "styled-components/macro";
import React from "react";

import SettingsIcon from "../Icons/settings-icon.svg";
import ExportIcon from "../Icons/export-icon.svg";
import SettingsIconHover from "../Icons/settings-icon-hover.svg";
import ExportIconHover from "../Icons/export-icon-hover.svg";

// TODO: add other export options, change gross implementation
//exports HTML from user-entered markdown
function handleClick(e) {
  e.preventDefault();
  let a = document.body.appendChild(document.createElement("a"));
  a.download = "myMarkdown.html";
  a.href = "data:text/html," + document.getElementById("markup").innerHTML;
  a.click();
}

function notImplementedMessage(e) {
  e.preventDefault();
  alert("Additional Settings Unavailable, Coming Soon!");
}

const Header = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <ToolsContainer>
          <Settings onClick={notImplementedMessage} />
          <Export onClick={handleClick} />
        </ToolsContainer>
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

// TODO: will show for mobile menu
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

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Settings = styled.button`
  border: 0px;
  cursor: pointer;
  height: 10vw;
  width: 10vw;
  min-width: 50px;
  min-height: 50px;
  max-width: 75px;
  max-height: 75px;
  background: url(${SettingsIcon});
  background-size: cover;
  &:hover,
  &:focus,
  &:active {
    background: url(${SettingsIconHover});
    background-size: cover;
  }
`;

const Export = styled.button`
  height: 10vw;
  width: 10vw;
  min-width: 50px;
  min-height: 50px;
  max-width: 75px;
  max-height: 75px;
  background: url(${ExportIcon});
  background-size: cover;
  border: 0px;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background: url(${ExportIconHover});
    background-size: cover;
  }
`;
