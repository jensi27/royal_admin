import React, { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";
import { Contactcardprops } from "./Contactcardprops";
import axios from "axios";
import './contact.css';

export const Contact = () => {
  const [getdata, setdata] = useState([]);
  console.log(getdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/contact/view")
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <Sidebar
        contact={
          <>
            <Header />
            <section className="home-section">
              <div className="bg-white p-0">
                {/* Page Header Start */}
                <div
                  className="container-fluid page-header mb-5 p-0"
                  style={{
                    backgroundImage: "url(Image/contact/contactmain.png)",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPositionY: "488px",
                  }}
                >
                  <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                      <h1 className="display-3 text-white text1 animated slideInDown">
                        Contact
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Page Header End */}

                {/* Contact Table Start */}
                <div
                  className="d-flex "
                  style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
                >
                  {getdata.map((el, index) => {
                    return (
                      <Contactcardprops 
                        name={el.name}
                        email={el.email}
                        subject={el.subject}
                        message={el.message}
                      />
                    );
                  })}
                </div>
                {/* Contact Table End */}

                <Footer />
                {/* Back to Top */}
                <a
                  href="#"
                  className="btn btn-lg btn-color btn-lg-square back-to-top"
                >
                  <i className="bi bi-arrow-up" />
                </a>
              </div>
            </section>
          </>
        }
      />
    </div>
  );
};
