import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img
        src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Logo.wine.svg"
        alt="cryptoimg"
      />
      <h1>React Crypto</h1>
      <img
        src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Logo.wine.svg"
        alt="cryptoimg"
      />
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 40vh;

  > h1 {
    margin: 0;
    font-size: 95px;
    text-shadow: 4px 5px 8px rgba(246, 246, 246, 1);
  }
  > img {
    position: relative;
    height: 50vh;
    width: 20vw;
    animation: move 4s ease-in-out infinite;
  }
  @keyframes move {
    0% {
      top: 0;
    }
    50% {
      top: -20px;
    }
    100% {
      top: 0;
    }
  }
  @media (max-width: 1000px) {
    height: 100px;
    > h1 {
      font-size: 60px;
    }
    justify-content: center;
    > img {
      display: none;
    }
  }
`;
