import React, { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import axios from "axios";
import { Teamcardprops } from "../team/Teamcardprops";

export const About = () => {

  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/staff/view")
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const totalstaff =getdata.length

  const [getbookdata, setbookdata] = useState([]);
  // console.log(getbookdata);
  useEffect(() => {
    axios
    .get("http://localhost:3000/booking/view")
    .then((res) => {
      // console.log(res.data.data);
      setbookdata(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  });
  
  const totalbooking = getbookdata.length;

  const [getromdata, setroomdata] = useState([]);
  // console.log(getdata);

  useEffect(() => {
    axios
      .get("http://localhost:3000/room/view")
      .then((res) => {
        // console.log(res);
        setroomdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getromdata]);
const totalroom =  getromdata.length

  return (
    <div>
      <Sidebar about={
        <>
          <Header />
          <section className="home-section">
            <div className="bg-white p-0" >

              {/* Page Header Start */}
              <div
                className="container-fluid page-header mb-5 p-0"
                style={{ backgroundImage: "url(Image/about/aboutmain.png)" , width :"100%" , backgroundSize : "cover" , backgroundPositionY : "488px" }}
              >
                <div className="container-fluid page-header-inner py-5">
                  <div className="container text-center pb-5">
                    <h1 className="display-3 text-white text1 animated slideInDown">
                      About Us
                    </h1>
                  </div>
                </div>
              </div>
              {/* Page Header End */}


              {/* About Start */}
              <div className="">
                <div className="container">
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                      <h5 className="text-start text-color text-uppercase">About Us</h5>
                      <h1 className="mb-4">
                        Welcome to{" "}
                        <span className="text-color text-uppercase">The Royal</span>
                      </h1>
                      <p className="mb-4">
                        We can provide meals and other services to guests, travelers and
                        tourists.Hotel can range from small family-run business to large
                        international chains. we also provides diffrent types of
                        services, such as room services.
                      </p>
                      <div className="row g-3 pb-4">
                        <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                          <div className="border rounded p-1">
                            <div className="border rounded text-center p-4">
                              <i className="fa fa-hotel fa-2x text-color mb-2" />
                              <h2 className="mb-1" data-toggle="counter-up">
                                {totalroom}
                              </h2>
                              <p className="mb-0">Rooms</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                          <div className="border rounded p-1">
                            <div className="border rounded text-center p-4">
                              <i className="fa fa-users-cog fa-2x text-color mb-2" />
                              <h2 className="mb-1" data-toggle="counter-up">
                                {totalstaff}
                              </h2>
                              <p className="mb-0">Staffs</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                          <div className="border rounded p-1">
                            <div className="border rounded text-center p-4">
                              <i className="fa fa-users fa-2x text-color mb-2" />
                              <h2 className="mb-1" data-toggle="counter-up">
                                {totalbooking}
                              </h2>
                              <p className="mb-0">Clients</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row g-3">
                        <div className="col-6 text-end">
                          <img
                            className="img-fluid rounded w-75 wow zoomIn"
                            data-wow-delay="0.1s"
                            src="Image/about/habout1.png"
                            style={{ marginTop: "15%" }}
                          />
                        </div>
                        <div className="col-6 text-start">
                          <img
                            className="img-fluid rounded w-100 wow zoomIn"
                            data-wow-delay="0.3s"
                            src="Image/about/habout2.png"
                          />
                        </div>
                        <div className="col-6 text-end">
                          <img
                            className="img-fluid rounded w-50 wow zoomIn"
                            data-wow-delay="0.5s"
                            src="Image/about/habout3.png"
                          />
                        </div>
                        <div className="col-6 text-start">
                          <img
                            className="img-fluid rounded w-75 wow zoomIn"
                            data-wow-delay="0.7s"
                            src="Image/about/habout4.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* About End */}


              {/*More info Start*/}
              <div className="about">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                      <div className="about-img">
                        <img src="Image/about/habout1.png" alt="Image" />
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                      <div className="section-header text-left">
                        <h5 className="text-start text-color text-uppercase">
                          More Info
                        </h5>
                        <h1 className="mb-4">
                          <span className=" text-uppercase">30 Year Experience</span>
                        </h1>
                      </div>
                      <div className="about-text">
                        <p>
                          Celebrating our team's extensive 25-year journey in the
                          hospitality industry has been nothing short of remarkable. Our
                          journey has been a testament to the dedication and passion of
                          our team, consistently striving to exceed guest expectations.
                        </p>
                        <p>
                          From the inception of our first property to the expansion of
                          our services, we've witnessed the evolution of the industry
                          firsthand. Our commitment to personalized service, luxurious
                          amenities, and cutting-edge facilities has been unwavering,
                          ensuring that each guest's stay is a distinctive and memorable
                          one. Looking forward, we remain dedicated to the principles
                          that have defined our success, anticipating another 25 years
                          of delivering unparalleled hospitality and creating cherished
                          memories for our valued guests.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*More info end*/}



              {/* Team Start */}
              <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h4 className="section-title text-center text-color text-uppercase">
                  Our Team
                </h4>
              </div>
                <div className="row">
                {getdata.map((el, index) => {
                            return (
                              <Teamcardprops
                                image={
                                  "http://localhost:3000/images/" + el.image
                                }
                                name={el.name}
                              />
                            );
                          })}
                </div>
              </div>
              {/* Team End */}

              {/* Back to Top */}
              <a href="#" className="btn btn-lg btn-color btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
              </a>
              <Footer />
            </div>
          </section>
        </>
      } />

    </div>
  )
}