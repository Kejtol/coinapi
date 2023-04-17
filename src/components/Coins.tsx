import React from "react";
import styled from "styled-components";

interface CountryName {
  crypto: {
    name: string;
    image: string;
    price_change_percentage_24h: number;
    current_price: number;
    symbol: string;
  };
}

const Coins: React.FC<CountryName> = ({ crypto }) => {
  return (
    <CoinsContainer>
      <CryptoLeft>
        <img src={crypto.image} alt="cryptoimg" />
        <CryptoInfo>
          <h3>{crypto.name}</h3>
          <h4>{crypto.symbol}</h4>
        </CryptoInfo>
      </CryptoLeft>
      <CryptoRight>
        <h3
          style={{
            color:
              crypto.price_change_percentage_24h >= 0 ? "lightgreen" : "red",
          }}
        >
          {crypto.price_change_percentage_24h}%
        </h3>
        <p>{crypto.current_price} $</p>
      </CryptoRight>
    </CoinsContainer>
  );
};

export default Coins;
const CoinsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 80vw;
  background-color: transparent;
  backdrop-filter: blur(20px);
  border-radius: 20px;
`;
const CryptoLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  display: flex;
  > img {
    margin-right: 20px;
    height: 50px;
    width: 50px;
  }
`;
const CryptoRight = styled.div`
  margin-right: 30px;
`;
const CryptoInfo = styled.div`
  h3 {
    margin-bottom: 0;
  }
  h4 {
    margin-top: 0;
    opacity: 0.6;
  }
`;
