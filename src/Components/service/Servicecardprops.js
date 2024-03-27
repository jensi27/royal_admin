import React from "react";
import './card.css'
export const Servicecardprops = (props) => {
    return (
        <div className="card7-container d-flex">
        <div class="card7">
            <div class="card7-img">
                <img src={props.image} alt="" />
            </div>
            <ul class="social-media">
                <li>{props.update}</li>
                <li>{props.delete}</li>
            </ul>
            <div class="card7-info">
                <p class="card7-title">{props.name}</p>
                <p class="card7-subtitle">{props.description}</p>
            </div>
        </div>
    </div>
        // <div className="card">
          
        //      <div className="content">
        //         <div className="service-icon bg-transparent border rounded p-1">
        //             <div className="service-icon bg-transparent border rounded p-1">
        //                 <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
        //                     <img src={props.image} style={{ height: "40px", width: "40px" }} />
        //                 </div>
        //             </div>
        //         </div>
        //         <h5 className="mt-3">{props.name}</h5>
        //         <p className="text-body p-3 p1">
        //             {props.description}
        //         </p>
        //     </div>
        //     <div className="d-flex justify-content-end mt-3 icon-container">
        //         {props.update}
        //         {props.delete}
        //     </div> 
        // </div>
    )
}