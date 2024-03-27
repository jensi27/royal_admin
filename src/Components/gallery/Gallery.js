import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Gallerycardprops } from "./Gallerycardprops";
import "./gallery.css";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({

  category: Yup.string()
  .min(2 ,'It Accepts minimum 2 character!')
  .max(5000 , 'It Accepts maximum 5000 character!')
  .required('Required'),
})

export const Gallery = () => {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [getfildata, setfildata] = useState("all");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  
  /*************view */
  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/gallery/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /***********delete */
  const delhandel = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/gallery/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const notify = (message, type = "success") => {
    toast[type](message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });
  };
  return (
    <div>
      <Sidebar
        gallery={
          <>
            <Header />

            <section className="home-section">
              <div className="container-xxl bg-white p-0" style={{margin : "0px"}}>
                {/* Page Header Start */}
                <div
                  className="container-fluid page-header  p-0"
                  style={{ backgroundImage: "url(Image/service/event2.png)" ,width :"100%" , backgroundSize : "cover" , backgroundPositionY : "488px"  }}
                >
                  <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                      <h1 className="display-3 text-white text1 animated slideInDown">
                        Gallery
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Page Header End */}

                {/* gallery Start */}

                </div>
                <div className="container-xxl bg-white p-0">
                  
                <div className="" >
                  {showPopup && (
                    <>
                      <div
                        className=""
                        style={{ padding: "0px" }}
                      >
                        <div className=" popup" style={{marginLeft: "-47px"}}>
                          <div className="popup-inner">
                            <div className="d-flex justify-content-md-end">
                              <a className="create1" onClick={() => setShowPopup(false)}>
                                <i class="fa-solid fa-xmark"></i>
                              </a>
                            </div>
                            <Formik
                              initialValues={{
                                name: "",
                                category: "",
                              }}
                              validationSchema={SignupSchema}
                              onSubmit={async (values) => {
                                const formData = new FormData(); // Create FormData object to send file
                                formData.append("image", image); // Append image file to FormData
                                formData.append("category", values.category);

                                axios
                                  .post(
                                    "http://localhost:3000/gallery/add",
                                    formData
                                  )
                                  .then((res) => {
                                    console.log(res);
                                    setShowPopup(false)
                                    notify(res.data.status);
                                  })
                                  .catch((error) => {
                                    console.log(error);
                                    notify("Error occurred", "error");
                                  });
                              }}
                            >
                              <Form name="form">
                                <div className="form_wrap">
                                  <div className="form_item">
                                    {/* <label>Image</label> */}
                                    <input
                                      type="file"
                                      required
                                      id="formFile"
                                      placeholder="Image"
                                      onChange={(e) =>
                                        setImage(e.target.files[0])
                                      } // Update selected image file
                                    />
                                  </div>
                                </div>
                                <div className="form_wrap">
                                  <div className="form_item">
                                    {/* <label>category</label> */}
                                    <Field type="text" name="category" placeholder="Category"/>
                                    <ErrorMessage name="category" />
                                    <div className="name" id="category" />
                                  </div>
                                </div>
                                <div className="btn">
                                  <input type="submit" />
                                </div>
                              </Form>
                            </Formik>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="container">
                    <div className="row">
                      <div className="portfolio">
                        <div className="container">
                          <div className="section-header text-center">
                            <h2 className="">Gallery</h2>
                          </div>
                          <div className="row">
                            <div className="d-flex justify-content-md-end">
                              <a className="create1" onClick={togglePopup}>
                                <i className="fa-solid fa-circle-plus" />
                              </a>
                            </div>
                            <div className="col-12">
                              <ul id="portfolio-flters">
                                <li
                                  onClick={() => setfildata("all")}
                                  className="filter-active"
                                >
                                  All
                                </li>
                                <li onClick={() => setfildata("room")}>Room</li>
                                <li onClick={() => setfildata("service")}>
                                  Service
                                </li>
                                <li onClick={() => setfildata("restaurant")}>
                                  Restaurant
                                </li>
                                <li onClick={() => setfildata("ab")}>About</li>
                              </ul>
                            </div>
                          </div>
                          <div className="row g-4 portfolio-container">
                            {getdata
                              .filter(
                                (el) =>
                                  getfildata === "all" ||
                                  el.category === getfildata
                              )
                              .map((el, index) => (
                                <Gallerycardprops
                                  key={index}
                                  image={
                                    "http://localhost:3000/images/" + el.image
                                  }
                                  category={el.category}
                                  delete={
                                    <i
                                      className="fa-solid fa-trash-can"
                                      onClick={() => delhandel(el._id)}
                                    />
                                  }
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* gallery End */}

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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  );
};
