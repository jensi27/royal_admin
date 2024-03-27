import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { Servicecardprops } from "./Servicecardprops";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const contentStyle = {
  height: "250px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "It Accepts minimum 2 character!")
    .max(100, "It Accepts maximum 100 character!")
    .required("Required"),

  description: Yup.string()
    .min(4, "It Accepts minimum 4 character!")
    .max(200, "It Accepts maximum 200 character!")
    .required("Required"),
});


export const Service = () => {
  const history = useHistory();

  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);


  const [getfeedback, setfeedback] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:3000/feedback/view")
    .then((res) => {
      // console.log(res);
      setfeedback(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
});



  const togglePopup1 = () => {
    setShowPopup(!showPopup);
  };

  const delhandel = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/service/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/service/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /********************edit */
  const [getdata1, setdata1] = useState({
    image: "",
    name: "",
    description: "",
  });
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    console.log(getdata1);

    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/service/show/${e}`)
      .then((res) => {
        setdata1(res.data.data);
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
        service={
          <>
            <Header />
            <section className="home-section">
              <div className="bg-white p-0">
                {/* Page Header Start */}
                <div
                  className="container-fluid page-header mb-5 p-0"
                  style={{
                    backgroundImage: "url(Image/service/servicemain.png)",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPositionY: "488px",
                  }}
                >
                  <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                      <h1 className="display-3 text-white  text1 animated slideInDown">
                        Services
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Page Header End */}

                {/* Service Start */}
                <div className="container-fluid" style={{marginBottom : "100px"}}>
                  {showPopup && (
                    <>
                      <div
                        className="container-fluid"
                        style={{ padding: "0px" }}
                      >
                        <div className=" popup">
                          <div className="popup-inner">
                            <div className="d-flex justify-content-md-end">
                              <a
                                className="create1"
                                onClick={() => setShowPopup(false)}
                              >
                                <i class="fa-solid fa-xmark"></i>
                              </a>
                            </div>
                            <Formik
                              initialValues={getdata1}
                              validationSchema={SignupSchema}
                              enableReinitialize={true}
                              onSubmit={async (values) => {
                                const formData = new FormData(); // Create FormData object to send file
                                formData.append("image", image); // Append image file to FormData
                                formData.append("name", values.name);
                                formData.append(
                                  "description",
                                  values.description
                                );

                                if (getempid) {
                                  axios
                                    .put(
                                      `http://localhost:3000/service/update/${getempid}`,
                                      formData
                                    )
                                    .then((res) => {
                                      console.log(res);
                                      setShowPopup(false);
                                      notify(res.data.status);
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                    });
                                } else {
                                  axios
                                    .post(
                                      "http://localhost:3000/service/add",
                                      formData
                                    )
                                    .then((res) => {
                                      console.log(res);
                                      setShowPopup(false);
                                      notify(res.data.status);
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                      notify("Error occurred", "error");
                                    });
                                }
                              }}
                            >
                              <Form name="form">
                                <div className="form_wrap">
                                  <div className="form_item">
                                    {/* <label>Image</label> */}
                                    <input
                                      style={{ paddingLeft: "50px" }}
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
                                    {/* <label>Name</label> */}
                                    <Field
                                      type="text"
                                      name="name"
                                      placeholder="Name"
                                    />
                                    <div className="name" id="name" />
                                    <ErrorMessage name="name" />
                                  </div>
                                </div>
                                <div className="form_wrap">
                                  <div className="form_item">
                                    {/* <label>Description</label> */}
                                    <Field
                                      as="textarea"
                                      name="description"
                                      id="description"
                                      cols="44"
                                      rows="5"
                                      placeholder="Description"
                                    ></Field>
                                    <ErrorMessage name="description" />
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
                    <div className="d-flex justify-content-md-end">
                      <a className="create1" onClick={togglePopup1}>
                        <i className="fa-solid fa-circle-plus" />
                      </a>
                    </div>
                  </div>
                  <section>
                    <div className="container c1 m-0">
                      {getdata.map((el, index) => {
                        return (
                          <Servicecardprops
                            image={"http://localhost:3000/images/" + el.image}
                            name={el.name}
                            description={el.description}
                            update={
                              <i
                                className="fa-solid fa-pen-to-square"
                                onClick={() => togglePopup(el._id)}
                              />
                            }
                            delete={
                              <i
                                className="fa-solid fa-trash-can"
                                onClick={() => delhandel(el._id)}
                              />
                            }
                          />
                        );
                      })}
                    </div>
                  </section>
                </div>
                {/* Service End */}

                <Footer />
                {/* Back to Top */}
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
