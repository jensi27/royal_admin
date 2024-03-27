import React from "react";

export const Bookingcardprops = (props) => {
    return (
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
            <td>{props.delete}</td> 
        </tr>
    )
}