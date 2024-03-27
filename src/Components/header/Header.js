import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Header = () => {
    const history = useHistory();
    return (
        <section className="home-section">
            <div>
                <div className="top-bar d-none d-md-block">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div className="d-flex top-bar-left">
                                <img src="Image/logo/logo.png" alt="logo" className="logo" style={{width:"200px", height:"60px",marginBottom:"20px"}}/>
                                    {/* <div className="text d-flex">
                                        <i className="fa fa-envelope icon me-2" />
                                        <p>Royal@gmail.com</p>
                                    </div>
                                    <div className="text d-flex">
                                        <i className="fa fa-phone-alt icon me-2" />
                                        <p>+012 345 6789</p>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="top-bar-right">
                                    <ul className="social d-flex">
                                        {/* <li className="p_header" href="">
                                            <i className="fab fa-instagram" />
                                        </li>
                                        <li className="p_header" href="">
                                            <i className="fab fa-facebook-f" />
                                        </li>
                                        <li className="p_header" href="">
                                            <i className="fab fa-youtube" />
                                        </li>
                                        <li className="p_header" href="">
                                            <i className="fab fa-linkedin-in" />
                                        </li> */}
                                        {/* <li className="p_header" style={{fontSize:"22px"}} onClick={()=>history.push('/signup')}>
                                        <i class="fa-solid fa-gear"></i>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}