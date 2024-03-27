import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Teamcardprops } from "./Teamcardprops";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./team.css";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name : Yup.string()
  .min(2 , 'It Accepts minimum 2 character!')
  .max(100 , 'It Accepts maximum 100 character!')
  .required('Required'),

  profession: Yup.string()
  .min(2 ,'It Accepts minimum 2 character!')
  .max(5000 , 'It Accepts maximum 5000 character!')
  .required('Required'),
})

export const Team = () => {
  const history = useHistory();

  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup1 = () => {
    setShowPopup(!showPopup)
  }

  /*************view */
  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/staff/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });


  /***********delete why*/
  const delhandel = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/staff/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /************ Edit */

  const [getdata1, setdata1] = useState({
    image: "",
    name: "",
    profession: "",
  });
  // console.log(getdata1);
  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    // console.log(e);
    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/staff/show/${e}`)
      .then((res) => {
        // console.log(res.data.data);
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
        team={
          <>
            <Header />

            <section className="home-section">
              <div className="container-xxl bg-white p-0" style={{margin : "0px"}}>
                {/* Page Header Start */}
                <div
                  className="container-fluid page-header mb-5 p-0"
                  style={{ backgroundImage: "url(Image/team/teammain.png)" , width :"100%" , backgroundSize : "cover" , backgroundPositionY : "488px"  }}
                >
                  <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                      <h1 className="display-3 text-white text1 animated slideInDown">
                        Our Team
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-xxL bg-white p-0">

                {/* Page Header End */}

                {/* Team Start */}
                {/* <div className="container-fluid" style={{paddingLeft : "0rem"}}> */}
                <div className="container-fluid">
                  {showPopup && (
                    <>
                      <div
                        className="container-fluid"
                        style={{ padding: "0px" }}
                      >
                        <div className=" popup">
                          <div className="popup-inner">
                            <div className="d-flex justify-content-md-end">
                              <a className="create1" onClick={() => setShowPopup(false)}>
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
                                  "profession",
                                  values.profession
                                );

                                if (getempid) {
                                  axios.put(`http://localhost:3000/staff/update/${getempid}`, formData)
                                    .then((res) => {
                                      console.log(res);
                                      setShowPopup(false)
                                      notify(res.data.status);
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                    })
                                } else {
                                  axios
                                    .post(
                                      "http://localhost:3000/staff/add",
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
                                    {/* <ErrorMessage name="name" /> */}
                                  </div>
                                </div>
                                <div className="form_wrap">
                                  <div className="form_item">
                                    {/* <label>Name</label> */}
                                    <Field type="text" name="name" placeholder="Name" />
                                    <div className="name" id="name" />
                                    <ErrorMessage name="name" />
                                  </div>
                                </div>
                                <div className="form_wrap">
                                  <div className="form_item">
                                    {/* <label>profession</label> */}
                                    <Field type="text" name="profession" placeholder="Profession" />
                                    <div
                                      className="profession"
                                      id="profession"
                                    />
                                    <ErrorMessage name="profession" />
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

                  <div className="container">
                    <div className="row">
                      <center>
                        <h5 className="section-title text-center text-color text-uppercase">
                          Our Teams
                        </h5>
                      </center>
                      <>
                        <div className="center-align">
                          <div className="d-flex justify-content-md-end">
                            <a className="create1" onClick={togglePopup1}>
                              <i className="fa-solid fa-circle-plus" />
                            </a>
                          </div>
                        </div>
                      </>

                      {/* <div className="container">
                      </div> */}
                      {getdata.map((el, index) => {
                        return (
                          <Teamcardprops
                            image={"http://localhost:3000/images/" + el.image}
                            name={el.name}
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
                  </div>
                </div>
                {/* Team End */}

                <Footer />
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
