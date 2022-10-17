import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectComponent from "../Select";
import "./styles.css";

function SelectCoins({
  crypto1,
  crypto2,
  setCrypto1,
  setCrypto2,
  days,
  setDays,
}) {
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [data, setData] = useState([]);

  const handleChange1 = (e) => {
    setCrypto1(e.target.value);
  };

  const handleChange2 = (e) => {
    setCrypto2(e.target.value);
  };

  useEffect(() => {
    axios.get(API_URL, { crossDomain: true }).then((response) => {
      if (response.data) {
        console.log(response.data);
        setData(response.data);
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    <div>
      <SelectComponent
        value={crypto1}
        handleChange={handleChange1}
        data={data}
        filter={crypto2}
      />
      <SelectComponent
        value={crypto2}
        handleChange={handleChange2}
        data={data}
        filter={crypto1}
      />
    </div>
  );
}

export default SelectCoins;
