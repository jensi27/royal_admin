import React from "react";

export const Specialmenu = (props) => {
  return (
    <div className="tab-pane active show" id="tab-1">
      <div className="row">
        <div className="col-lg-8 details order-2 order-lg-1">
          <h3>{props.title}</h3>
          <p className="fst-italic">{props.description}</p>
        </div>
        <div className="col-lg-4 text-center order-1 order-lg-2">
          <img
            src={props.image}
            alt="Sev Khamni"
            className="img-fluid border border-dark"
            height="500px"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
};
