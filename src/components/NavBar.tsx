import React from "react";
import styled from "styled-components";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
interface Props {
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  mode: boolean;
}
const NavBar: React.FC<Props> = ({ setMode, mode }) => {
  return (
    <NavBarContainer>
      <Mode
        onClick={(): void => {
          setMode(!mode);
        }}
      >
        <LightModeIcon />
        <NightlightRoundIcon />
      </Mode>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 2;
  top: 0;
  height: 10vh;
  width: 100vw;
`;
const Mode = styled.button`
  height: 50px;
  width: 100px;
  border: none;
  border-radius: 30px;
  background-color: rgba(160, 159, 159, 1);
  background-image: linear-gradient(
    133deg,
    rgba(160, 159, 159, 1) 37%,
    #292828 54%
  );
  :hover {
    box-shadow: 0px 0px 100px 43px rgba(255, 255, 255, 1);
    transition: 200ms;
    transform: scale(1.1);
  }
  > .MuiSvgIcon-root {
    margin-right: 10px;
    margin-left: 10px;
    color: white;
  }
`;
