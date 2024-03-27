import React from "react";

export const Teamcardprops = (props) => {
    return (
        <div className="column">
            <div className="effect-2">
                <div className="effect-img">
                    <img src={props.image} />
                </div>
                <div className="effect-text">
                    <div className="effect-btn">
                        <h2>{props.name}</h2>
                        {props.update}
                        {props.delete}
                    </div>
                </div>
            </div>
        </div>
    )
}