import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";

let id = 1;

const Body = ({ data }) => {
  return (
    <section className="section">
      {data.map((el) => {
        return (
          <div key={id++} className="section is-small">
            <article className="media">
              <figure className="media-left">
                <p className="image is-128x128">
                  <img src={el.urlToImage} />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{el.author}</strong>{" "}
                    <small>
                      <a href={el.url} target="_blank">
                        {el.url}
                      </a>
                    </small>{" "}
                    <small>{el.publishedAt}</small>
                    <br />
                    {el.title}
                    <br />
                    {el.content}
                  </p>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </section>
  );
};

export default Body;
