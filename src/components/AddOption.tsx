import React from "react";
import styled from "styled-components";
interface Props {
  title: string;
  price: number;
  benefits: string[];
}
const AddOption: React.FC<Props> = ({ title, price, benefits }) => {
  return (
    <AdOption
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <AdTop>
        <h3>{title}</h3>
      </AdTop>
      <AdMid>
        <ul>
          {benefits.map((bene) => (
            <li>{bene}</li>
          ))}
        </ul>
        <p>per month: {price}$</p>
      </AdMid>
      <AdBot>
        <button>
          <p>Buy</p>
        </button>
      </AdBot>
    </AdOption>
  );
};

export default AddOption;
const AdOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000cf;
  border-radius: 30px;
  width: 25vw;
  height: 60vh;
  @media (max-width: 1000px) {
    height: 100vh;
    width: 80vw;
    margin-top: 20px;
  }
`;
const AdTop = styled.div`
  flex: 0.2;
  > h3 {
    color: #fffb00;
    margin: 10px;
    font-size: 70px;
    font-weight: 600;
  }
`;
const AdMid = styled.div`
  flex: 0.6;
  width: 100%;
  position: relative;
  > ul {
    font-size: 25px;
    margin-top: 20px;
  }
  > p {
    position: absolute;
    bottom: 30px;
    margin: 0;
    margin-top: 20px;
    margin-left: 30px;
    font-size: 20px;
    color: #a1a1a1;
    @media (max-width: 1000px) {
      bottom: 0;
    }
  }
`;
const AdBot = styled.div`
  flex: 0.2;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  > button {
    width: 90%;
    height: 90%;
    margin-bottom: 30px;
    border: none;
    border-radius: 50px;
    font-size: 30px;
    color: white;
    background-color: rgba(0, 0, 78, 1);
    background-image: linear-gradient(
      153deg,
      rgba(0, 0, 78, 1) 0%,
      rgba(0, 0, 208, 1) 100%
    );
    > p {
      margin: 10px;
    }
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
