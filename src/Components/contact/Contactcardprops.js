import React from "react";

export const Contactcardprops = (props) => {
  return (
    <div  className="col-lg-4 col-md-6 col-sm-12">
    <div className="card_contact">
      <div className="content_contact">
        <p className="heading">{props.name}</p>
        <p>{props.email}</p>
        <p>{props.subject}</p>
        <p className="para">{props.message}</p>
      </div>
    </div>

    </div>
  );
};
