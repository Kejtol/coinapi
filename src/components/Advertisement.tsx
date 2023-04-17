import React from "react";
import styled from "styled-components";
import AddOption from "./AddOption";

interface Props {
  add: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
}
const Advertisement: React.FC<Props> = ({ add, setAdd }) => {
  return (
    <AdContainer
      onClick={(): void => {
        setAdd(false);
      }}
    >
      <AdOptions
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <AddOption title="Vip" price={50} benefits={["Faster Coin info"]} />
        <AddOption
          title="SuperVip"
          price={10}
          benefits={["Faster Coin info", "better exchanfe rate"]}
        />
        <AddOption
          title="Master"
          price={100}
          benefits={[
            "Faster Coin info",
            "Better exchanfe rate",
            "More Cryptos",
          ]}
        />
      </AdOptions>
    </AdContainer>
  );
};

export default Advertisement;
const AdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #0000007f;
  z-index: 3;
`;
const AdOptions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 70vh;
  border-radius: 50px;
  background-color: rgba(128, 13, 255, 1);
  background-image: linear-gradient(
    153deg,
    rgba(128, 13, 255, 1) 0%,
    rgba(199, 175, 229, 1) 100%
  );

  @media (max-width: 1000px) {
    flex-direction: column;
    align-content: space-between;
    justify-content: start;
    height: auto;
    overflow: scroll;
    margin: 0;
    border-radius: 0;
  }
`;
