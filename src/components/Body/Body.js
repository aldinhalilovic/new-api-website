import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";

let id = 1;

const Body = ({ data }) => {
  return (
    <section className="section ">
      <div className="columns">
        {data.map((el) => {
          return (
            <div key={id++} className="column px-2">
              <article className="media">
                <figure className="media-left">
                  <p className="image is-96x96">
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
                      <strong>{el.title}</strong>
                      <br />
                      <br />
                      {el.content}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Body;
