import React from "react";

export const Gallerycardprops = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 portfolio-v portfolio-item">
      <div className="">
        <a src={props.image} data-lightbox="portfolio">
          <img src={props.image} alt="Portfolio Image" />
        </a>
      </div>
      <div className="g1">
        <a className="btn">
          {props.delete}
        </a>
      </div>
    </div>
  );
};
