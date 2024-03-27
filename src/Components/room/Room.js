import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Roomcardprops } from "./Roomcardprops";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./room.css";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  price: Yup.number()
    .min(2, "Too Short!")
    .max(5000, "Too Long!")
    .required("Required"),

  name: Yup.string()
    .min(2, "It Accepts minimum 2 character!")
    .max(100, "It Accepts maximum 100 character!")
    .required("Required"),

  bed: Yup.number()
    .min(1, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),

  bath: Yup.number()
    .min(1, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),

  description: Yup.string()
    .min(4, "It Accepts minimum 4 character!")
    .max(2000, "It Accepts maximum 2000 character!")
    .required("Required"),

  // email: Yup.string()
  //   .email('Invalid email')
  //   .required('Required'),
});

const contentStyle = {
  height: "250px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

export const Room = () => {
  const history = useHistory();

  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup1 = () => {
    setShowPopup(!showPopup);
  };

  /***************view  */

  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/room/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /*************Feedback View */

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

  /***************delete */

  const delhandel = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/room/delete/${e}`)
      .then((res) => {
        console.log(res);
        // setdata(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /************ Edit */

  const [getdata1, setdata1] = useState({
    image: "",
    price: "",
    name: "",
    bed: "",
    bath: "",
    description: "",
  });
  // console.log(getdata1);
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    // console.log(e);
    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/room/show/${e}`)
      .then((res) => {
        // console.log(res.data.data);
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const notify = () => toast.success('🦄 Add Successfully!', {
  //   position: "bottom-left",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   transition: Zoom,
  // });;
  // const danger = () => toast.warn('🦄 Danger!', {
  //   position: "bottom-left",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   transition: Zoom,
  // });

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
        room={
          <>
            <Header />
            <section className="home-section">
              <div className="bg-white p-0">
                {/* Page Header Start */}
                <div
                  className="container-fluid page-header mb-5 p-0"
                  style={{
                    backgroundImage: "url(Image/room/roommain.png)",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPositionY: "488px",
                  }}
                >
                  <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                      <h1 className="display-3 text-white text1 animated slideInDown">
                        Rooms
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Page Header End */}

                {/* Room Start */}
                <div className="">
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
                                formData.append("price", values.price);
                                formData.append("name", values.name);
                                formData.append("bed", values.bed);
                                formData.append("bath", values.bath);
                                formData.append(
                                  "description",
                                  values.description
                                );

                                if (getempid) {
                                  axios
                                    .put(
                                      `http://localhost:3000/room/update/${getempid}`,
                                      formData
                                    )
                                    .then((res) => {
                                      console.log(res);
                                      setShowPopup(false);
                                      notify(res.data.status);
                                      // notify();
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                      // danger();
                                    });
                                } else {
                                  axios
                                    .post(
                                      "http://localhost:3000/room/add",
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
                                      type="file"
                                      required
                                      id="formFile"
                                      placeholder="Image"
                                      onChange={(e) =>
                                        setImage(e.target.files[0])
                                      } // Update selected image file
                                    />
                                    <ErrorMessage name="image" />
                                  </div>
                                </div>
                                <div className="form_wrap">
                                  <div className="form_item">
                                    {/* <label>Price</label> */}
                                    <Field
                                      type="text"
                                      name="price"
                                      placeholder="price"
                                    />
                                    <ErrorMessage name="price" />
                                    <div className="price" id="price" />
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
                                    <ErrorMessage name="name" />
                                    <div className="name" id="name" />
                                  </div>
                                </div>
                                <div className="form_wrap fullname">
                                  <div className="form_item">
                                    {/* <label>Bed</label> */}
                                    <Field
                                      type="text"
                                      name="bed"
                                      placeholder="Bed"
                                    />
                                    <ErrorMessage name="bed" />
                                    <div className="bed" id="bed" />
                                  </div>
                                  <div className="form_item">
                                    {/* <label>Bath</label> */}
                                    <Field
                                      type="text"
                                      name="bath"
                                      placeholder="Bath"
                                    />
                                    <ErrorMessage name="bath" />
                                    <div className="bath" id="bath" />
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
                                <div>
                                  <button>Submit</button>
                                </div>
                              </Form>
                            </Formik>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="container-xxl" style={{ maxwidth: "0px", marginBottom : "100px" }}>
                  <div className="container">
                    <div
                      className="text-center wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <h5 className="section-title text-center text-color text-uppercase">
                        Our Rooms
                      </h5>
                      <h1 className="">
                        Explore Our{" "}
                        <span className="text-color text-uppercase">Rooms</span>
                      </h1>
                    </div>

                    <div className="row g-4">
                      <div className="d-flex justify-content-md-end">
                        <a className="create1" onClick={togglePopup1}>
                          <i className="fa-solid fa-circle-plus" />
                        </a>
                      </div>
                      {getdata.map((el, index) => {
                        return (
                          <Roomcardprops
                            price={el.price}
                            image={"http://localhost:3000/images/" + el.image}
                            name={el.name}
                            bed={el.bed}
                            bath={el.bath}
                            dec={el.description}
                            update={
                              <i
                                className="fa-solid fa-pen-to-square"
                                onClick={() => togglePopup(el._id)}
                              />
                            }
                            del={
                              <i
                                className="fa-solid fa-trash-can"
                                onClick={() => delhandel(el._id)}
                              />
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* Room End */}

                {/* Testimonial Start */}
                {/* <div
                  className="container-xxl testimonial mt-5 py-5 bg-dark wow zoomIn"
                  data-wow-delay="0.1s"
                  style={{ marginBottom: 90 }}
                >
                  <div className="container">
                    <Carousel autoplay slidesToShow={2}> */}
                      {/* Set slidesToShow to 2 */}
                      {/* {getfeedback.map((el, index) => {
                        return (
                          <Feedbackcardprops
                            name={el.name}
                            image={"http://localhost:3000/images/" + el.image}
                            message={el.message}
                            profession={el.profession}
                          />
                        );
                      })}
                    </Carousel>
                  </div>
                </div> */}
                {/* Testimonial End */}

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
