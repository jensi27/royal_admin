import React from "react";

export const Usercardprops = (props) => {
    return (
        <tr>
            <th scope="row">{props.counter}</th>
            <td>{props.name}</td>   
            <td>{props.mno}</td>
            <td>{props.email}</td>  
            <td>{props.delete}</td> 
        </tr>
    )
}