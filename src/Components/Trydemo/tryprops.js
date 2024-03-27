import React from "react";

export const Tryprops = (props) => {
    return(
        <div>
            <b>{props.name}</b>
            <b>{props.email}</b>
            <b>{props.checkin}</b>
            <b>{props.checkout}</b>
            <b>{props.adultno}</b>
            <b>{props.childno}</b>
            <b>{props.room}</b>
            <b>{props.message}</b>    
        </div>
    )
}


