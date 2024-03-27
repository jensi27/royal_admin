import React from "react";

export const Gallerycardprops = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-v portfolio-item pd ">
      <div className="" style={{ width: "100%", height: "75%", overflow: "hidden" }}>
        <li src={props.image} style={{width:"100%" , height:"100%" , objectFit:"cover" , listStyle : "none"}}  data-lightbox="portfolio">
          <img src={props.image} alt="Portfolio Image" />
        </li>
        <p>{props.category}</p>
      </div>
     
      <div className="g1">
        <a className="btn" href="#">
        {props.delete}
          {/* <i
            className="fa-solid fa-trash-can"
            style={{ fontSize: "x-large", color: "white" }}
          /> */}
        </a>
      </div>
    </div>
  );
};
