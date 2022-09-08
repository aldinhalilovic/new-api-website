import React, { useEffect, useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import Body from "../Body/Body";

const Navbar = () => {
  const BASE_URL = "https://newsapi.org/v2/everything";
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState("auto-industry");
  const getData = () => {
    axios
      .get(
        `${BASE_URL}/?q=${topic}&pageSize=3&apiKey=01e6292bd6294b649bb8675dbc01e555`
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    getData();
  }, [topic]);
  return (
    <div>
      <button
        className="button is-link is-light mx-6 my-6 px-6"
        onClick={() => setTopic("formula1")}
      >
        Formula 1
      </button>
      <button
        className="button is-light mx-6 my-6 px-6"
        onClick={() => setTopic("verstappen")}
      >
        Verstappen
      </button>
      <button
        className="button is-black mx-6 my-6 px-6"
        onClick={() => setTopic("hamilton")}
      >
        Hamilton
      </button>
      <button
        className="button is-link mx-6 my-6 px-6"
        onClick={() => setTopic("leclerc")}
      >
        Leclerc
      </button>
      <Body data={data} />
    </div>
  );
};

export default Navbar;
