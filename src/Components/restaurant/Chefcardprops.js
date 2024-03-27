import React from "react";

export const Chefcardprops = (props) => {
    return (
        <article className="card__article">
            <img src= {props.image}
            />
            <div className="card__data">
                <h2 className="card__title">{props.name}</h2>
                <span className="card__description">{props.profession}</span>
                {props.update}
                {props.delete}
            </div>
        </article>
    )
}