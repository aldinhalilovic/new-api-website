import React, { useEffect, useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import Body from "../Body/Body";

const Navbar = () => {
  const BASE_URL = "https://newsapi.org/v2/everything";
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState("auto-industry");
  const [page, setPage] = useState(1);
  const getData = () => {
    axios
      .get(
        `${BASE_URL}/?q=${topic}&pageSize=3&page=${page}&apiKey=01e6292bd6294b649bb8675dbc01e555`
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    getData();
  }, [topic]);
  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div className="has-background-light">
      <div>
        <button
          className="button has-background-primary-dark has-text-light mx-6 mt-6 px-6"
          onClick={() => setTopic("formula1")}
        >
          Formula 1
        </button>
        <button
          className="button has-background-primary-dark has-text-light mx-6 mt-6 px-6"
          onClick={() => setTopic("verstappen")}
        >
          Verstappen
        </button>
        <button
          className="button has-background-primary-dark has-text-light mx-6 mt-6 px-6"
          onClick={() => setTopic("hamilton")}
        >
          Hamilton
        </button>
        <button
          className="button has-background-primary-dark has-text-light mx-6 mt-6 px-6"
          onClick={() => setTopic("leclerc")}
        >
          Leclerc
        </button>
      </div>
      <Body data={data} />
      <nav
        className="pagination is-large  is-rounded py-5  px-6 has-background-light"
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          <li>
            <a
              className="pagination-link has-background-primary-dark"
              aria-label="Page 1"
              aria-current="page"
              onClick={() => setPage(1)}
            >
              1
            </a>
          </li>
          <li>
            <a
              className="pagination-link has-background-primary-dark"
              aria-label="Goto page 2"
              onClick={() => setPage(2)}
            >
              2
            </a>
          </li>
          <li>
            <a
              className="pagination-link has-background-primary-dark"
              aria-label="Goto page 3"
              onClick={() => setPage(3)}
            >
              3
            </a>
          </li>
          <li>
            <a
              className="pagination-link has-background-primary-dark"
              aria-label="Goto page 4"
              onClick={() => setPage(4)}
            >
              4
            </a>
          </li>
          <li>
            <a
              className="pagination-link has-background-primary-dark"
              aria-label="Goto page 5"
              onClick={() => setPage(5)}
            >
              5
            </a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a
              className="pagination-link has-background-primary-dark"
              aria-label="Goto page 45"
              onClick={() => setPage(45)}
            >
              45
            </a>
          </li>
          <li>
            <a
              className="pagination-link has-background-primary-dark"
              aria-label="Goto page 46"
              onClick={() => setPage(46)}
            >
              46
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
