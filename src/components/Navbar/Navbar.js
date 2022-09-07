import React, { useEffect, useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";

const Navbar = () => {
  const BASE_URL = "https://newsapi.org/v2/everything";
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState("auto-industry");
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
      <button
        className="button is-link is-light"
        style={{
          marginLeft: 20,
        }}
        onClick={() => setTopic("volkswagen")}
      >
        Volkswagen
      </button>
      <button
        style={{
          marginLeft: 20,
        }}
        className="button is-light"
        onClick={() => setTopic("mercedes")}
      >
        Mercedes
      </button>
      <button
        style={{
          marginLeft: 20,
        }}
        className="button is-black"
        onClick={() => setTopic("audi")}
      >
        Audi
      </button>
      <button
        style={{
          marginLeft: 20,
        }}
        className="button is-link"
        onClick={() => setTopic("bmw")}
      >
        Bmw
      </button>
    </div>
  );
};

export default Navbar;
