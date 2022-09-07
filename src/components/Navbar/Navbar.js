import React, { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const BASE_URL = "https://newsapi.org/v2/everything";
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState();
  const getData = () => {
    axios
      .get(
        `${BASE_URL}/?q=${topic}&pageSize=30&page=2&apiKey=01e6292bd6294b649bb8675dbc01e555`
      )
      .then((res) => console.log(res.data));
  };

  useEffect(() => {
    getData();
  }, [topic]);
  return (
    <div>
      <button onClick={() => setTopic("volkswagen")}>Volkswagen</button>
      <button onClick={() => setTopic("mercedes")}>Mercedes</button>
      <button onClick={() => setTopic("audi")}>Audi</button>
      <button onClick={() => setTopic("bmw")}>Bmw</button>
      <h1>lkasjdklsajdk</h1>
    </div>
  );
};

export default Navbar;
