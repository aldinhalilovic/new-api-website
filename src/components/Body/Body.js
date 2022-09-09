import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";

let id = 1;

const Body = ({ data }) => {
  return (
    <section className="section is-fluid has-background-primary-dark mt-6	">
      <div className="container">
        <div className="columns">
          {data.map((el) => {
            return (
              <div
                key={id++}
                className="column is-pulled-left is-family-primary has-background-light my-6 mx-1"
              >
                <article className="media">
                  <figure className="media-left pt-6 mt-6">
                    <p className="image is-96x96">
                      <img src={el.urlToImage} />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content ">
                      <p className="is-family-primary is-size-6 has-text-left">
                        <strong>{el.author}</strong> <br />
                        <small>
                          <a href={el.url} target="_blank">
                            {el.url}
                          </a>
                        </small>{" "}
                        <br />
                        {/* <small>{el.publishedAt}</small> */}
                        <br />
                        <strong>{el.title}</strong>
                        {/* <br /> */}
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
      </div>
    </section>
  );
};

export default Body;
