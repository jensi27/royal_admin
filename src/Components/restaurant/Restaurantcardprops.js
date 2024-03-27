import React from 'react'

export const Choosecardprops = (props) => {
    return (
        <div className="col-lg-4">
            <div className="box">
                <span>{props.no}</span>
                <h4>{props.title}</h4>
                <p>
                    {props.description}
                </p>
                <ul className="sci">
                    <li className="btn" href="#">
                    {props.update}
                    </li>
                    <li className="btn" href="#">
                    {props.delete}
                    </li>
                </ul>
            </div>
        </div>
    )
}
