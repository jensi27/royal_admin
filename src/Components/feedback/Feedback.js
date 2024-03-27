import React, { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Feedbackcardprops } from "./Feedbackcardprops";
import axios from "axios";

export const Feedback = () => {
  const [image, setImage] = useState(null);

  const [getdata, setdata] = useState([]);
  console.log(getdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/feedback/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <Sidebar
        feedback={
          <>
            <Header />
            <section className="home-section">
              <div className="bg-white p-0">
                {/* Page Header Start */}
                <div
                  className="container-fluid page-header mb-5 p-0"
                  style={{
                    backgroundImage: "url(Image/testimonial/testimonialmain.png)",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPositionY: "488px",
                  }}
                >
                  <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                      <h1 className="display-3 text-white text1 animated slideInDown">
                        Testimonial
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Page Header End */}

                {/* Contact Table Start */}
                <div className="container"  style={{marginBottom : "100px"}}>
                  <h1 style={{ marginTop: "30px" }}>Feedback</h1>
                  <table className="table table-bordered">
                    <thead>
                      <tr
                        style={{ backgroundColor: "#031273", color: "white" }}
                      >
                        {/* <th scope="col">No</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Message</th>
                      </tr>
                    </thead>
                    <tbody style={{ backgroundColor: "#c8deff" }}>
                      {getdata.map((el, index) => {
                        return (
                          <Feedbackcardprops
                            name={el.name}
                            image={"http://localhost:3000/images/" + el.image}
                            profession={el.profession}
                            message={el.message}
                          />
                        );
                      })}
                    </tbody>
                  </table>
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
