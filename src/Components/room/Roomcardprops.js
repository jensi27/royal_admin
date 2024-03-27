import React from "react";

export const Roomcardprops = (props) => {
    return (
        <div
            className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="0.1s"
        >
            <div id="card-container">
                <div id="card">
                    <div className="front face">
                        <img src={props.image} />
                    </div>
                    <div className="back face">
                        <div className="m-5">
                            <div className="d-flex justify-content-between mb-2">
                                <h2>{
                                    props.name
                                }
                                </h2>
                            </div>
                            <div className="d-flex mb-3">
                                <small className="border-end me-3 pe-3">
                                    <i className="fa fa-bed text-color me-2" />{props.bed}
                                </small>
                                <small className="border-end me-3 pe-3">
                                    <i className="fa fa-bath text-color me-2" />{props.bath}
                                </small>
                                <small>
                                    <i className="fa fa-wifi text-color me-2" />
                                    Wifi
                                </small>
                            </div>
                            <p>₹ {props.price} /Night</p>
                            <p
                                className="text-body mb-3"
                                style={{ height: 100, overflow: "hidden" }}
                            >
                                {" "}
                                {props.dec}
                            </p>
                            <div className="d-flex justify-content-end mt-3">
                                {props.update}
                                {props.del}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}