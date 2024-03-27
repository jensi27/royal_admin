import React from "react";

export const Tryprops = (props) => {
    return(
        <tr>
        <th scope="row">{props.counter}</th>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.checkin}</td>
        <td>{props.checkout}</td>
        <td>{props.adultno}</td>   
        <td>{props.childno}</td>   
        <td>{props.room}</td>
        <td>{props.message}</td> 
        {props.delete} 
    </tr>
        // <div>
        //     <b>{props.name}</b>
        //     <b>{props.email}</b>
        //     <b>{props.checkin}</b>
        //     <b>{props.checkout}</b>
        //     <b>{props.adultno}</b>
        //     <b>{props.childno}</b>
        //     <b>{props.room}</b>
        //     <b>{props.message}</b>    
        // </div>
    )
}


