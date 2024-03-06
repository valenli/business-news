import newsImg from '../assets/News.png'
import React from "react";

const NewsItem = ({ title,src, description, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src?src:newsImg}
        style={{ height: "200px", width: "326px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "news is a report of current event. It is information about something that has just happened."}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
