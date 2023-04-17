import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Coins from "./components/Coins";
import axios from "axios";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement";

interface CountryName {
  name: string;
  image: string;
  id: string;
  price_change_percentage_24h: number;
  current_price: number;
  symbol: string;
}

function App() {
  const [mode, setMode] = useState(false);
  const [country, setCountry] = useState<CountryName[]>([]);
  const [add, setAdd] = useState(true);

  const coinInfo =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1";

  useEffect(() => {
    axios
      .get(coinInfo)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addOpen = () => {
    if (add && window.screen.width >= 1000) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  };
  useEffect(() => {
    addOpen();
  }, [add]);
  return (
    <div className={mode ? "light" : "dark"}>
      {add && <Advertisement add={add} setAdd={setAdd} />}
      <Header />
      <NavBar setMode={setMode} mode={mode} />
      <Body>
        {country.map((crypto) => (
          <Coins key={crypto.id} crypto={crypto} />
        ))}
      </Body>
    </div>
  );
}

export default App;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
`;
