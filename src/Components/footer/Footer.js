import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const Footer = () => {
    const history = useHistory();
    return (
        <div>
            {/* Footer Start */}
            <div
                className="bg-dark text-light footer mt-5  wow fadeIn"
                data-wow-delay="0.1s">
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4">
                            <ul className="btn-color rounded p-4">
                                <li href="index.html" onClick={() => history.push("/")} style={{listStyle : "none"}} >
                                    <h1 className="text-white text-uppercase mb-3  text-start">
                                        The Royal
                                    </h1>
                                </li>
                                <p className="text-white mb-0">
                                    We can provide meals and other services to guests, travelers and
                                    tourists.Hotel can range from small family-run business to large
                                    international chains. we also provides diffrent types of services,
                                    such as room services.
                                </p>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className="text-start text-color text-uppercase mb-4">Contact</h6>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                Katargram,surat
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                +012 345 67890
                            </p>
                            <p className="mb-2 d-flex">
                                <i className="fa fa-envelope me-3 pt-1" />
                                theroyal2103@gmail.com
                            </p>
                            <ul className="d-flex pt-2">
                                <li className="btn btn-outline-light btn-social" href="">
                                <i class="fab fa-instagram"></i>
                                </li>
                                <li className="btn btn-outline-light btn-social" href="">
                                <i class="fab fa-facebook-f"></i>
                                </li>
                                <li className="btn btn-outline-light btn-social" href="">
                                <i class="fab fa-youtube"></i>
                                </li>
                                <li className="btn btn-outline-light btn-social" href="">
                                <i class="fab fa-linkedin-in"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="row gy-5 g-4">
                                <ul className="col-md-6">
                                    <h6 className="text-start text-color text-uppercase mb-4">
                                        Company
                                    </h6>
                                    <li className="btn btn-link" onClick={() => history.push("Gallery")} href="gallery.html">
                                        Gallery
                                    </li>
                                    <li className="btn btn-link" onClick={() => history.push("Team")} href="team.html">
                                        Teams
                                    </li>
                                    <li className="btn btn-link" onClick={() => history.push("Service")} href="service.html">
                                        Services
                                    </li>
                                    <li className="btn btn-link" onClick={() => history.push("/About")} href="about.html">
                                        About Us
                                    </li>
                                    <li className="btn btn-link" onClick={() => history.push("Contact")} href="contact.html">
                                        Contact Us
                                    </li>
                                </ul>
                                <ul className="col-md-6">
                                    <h6 className="text-start text-color text-uppercase mb-4">
                                        Services
                                    </h6>
                                    <li className="btn btn-link" onClick={() => history.push("Service")} href="service.html">
                                        Food &amp; Restaurant
                                    </li>
                                    <li className="btn btn-link" onClick={() => history.push("Service")} href="service.html">
                                        Spa &amp; Fitness
                                    </li>
                                    <li className="btn btn-link" onClick={() => history.push("Service")} href="service.html">
                                        Sports &amp; Gaming
                                    </li>
                                    <li className="btn btn-link" onClick={() => history.push("Service")} href="service.html">
                                        Event &amp; Party
                                    </li>
                                    <li className="btn btn-link" onClick={() => history.push("Service")} href="service.html">
                                        GYM &amp; Yoga
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-12 mb-md-0 text-center">
                                ©{" "}
                                <a className="border-bottom" onClick={() => history.push("/")}>
                                    The Royal
                                </a>
                                , All Right Reserved. Designed By
                                <a className="border-bottom">
                                    Hensi Vaghasiya, Jensi Vaghasiya, Drashti Vaghasiya
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </div>
    
    )
}