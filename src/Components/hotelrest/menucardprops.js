import React from "react";

export const Menucardprops = (props) =>{
    return(
        <div className="card">
        <img src={props.image} alt="" />
        <div className="card-body">
          <p className="card-sub-title">{props.name}</p>
          <p className="card-info">
            {props.description}
          </p>
          <p>{props.price}</p>
          <div className="d-flex">
            {props.update}
            {props.delete}
            {/* <i className="fa-solid fa-pen-to-square" />
            <i className="fa-solid fa-trash-can" /> */}
          </div>
        </div>
      </div>
    )
}