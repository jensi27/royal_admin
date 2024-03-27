import React, { useEffect, useState } from "react";
import "./restaurant.css";
import axios from "axios";
import { Choosecardprops, Restaurantprops } from "./Restaurantcardprops";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Carousel } from "antd";
import { Field, Form, Formik } from "formik";
import "./restaurant.css";
import { Specialmenu } from "./specialmenu";
import { Gallerycardprops } from "./gallerycardprops";
import { Chefcardprops } from "./Chefcardprops";

export const Restaurant = () => {
  const history = useHistory();
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupgallery, setShowPopupgallery] = useState(false);
  const [image, setImage] = useState(null);

  //why us 
  const togglePopup1 = () => {
    setShowPopup(!showPopup);
  };

  //gallery

  const togglePopup2 = () => {
    setShowPopupgallery(!showPopup);
  };

  /*********view why section */
  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/choosers/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const delhandel = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/choosers/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [getdata1, setdata1] = useState({
    no: "",
    title: "",
    descrption: "",
  });

  const [getempid, setempid] = useState();

  const togglePopup = (e) => {
    setempid(e);
    // console.log(e);
    setShowPopup(!showPopup);
    axios
      .get(`http://localhost:3000/choosers/show/${e}`)
      .then((res) => {
        // console.log(res.data.data);
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /******************special item view */
  const [getdata2, setdata2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/specialitem/view")
      .then((res) => {
        // console.log(res);
        setdata2(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /******************gallery */
  const [getdata3, setdata3] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rgallery/view")
      .then((res) => {
        // console.log(res);
        setdata3(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const delhandel4 = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/rgallery/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  /******************chef  */
  const [getdata4, setdata4] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/chef/view")
      .then((res) => {
        // console.log(res);
        setdata4(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });


  const delhandel5 = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/chef/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <Sidebar
        restaurant={
          <>
            <Header />
            <section className="home-section">
              <div className="container-xxl bg-white p-0">
                <main id="main" className="bg-white">
                  {/* Page Header Start */}
                  <div
                    className="container-fluid page-header mb-5 p-0"
                    style={{
                      backgroundImage: "url(Image/restaurant/restaurant4.png)",
                    }}
                  >
                    <div className="container-fluid page-header-inner py-5">
                      <div className="container text-center pb-5">
                        <h1 className="display-3 text-white text1 animated slideInDown">
                          Restaurant
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/* Page Header End */}

                  {/* ======= Whu Us Section ======= */}
                  <section id="why-us" className="why-us">
                    <div className="container-fluid">
                    <center>
                        <div className="rsection-title">
                          <h3>
                            Why choose{" "}
                            <span className="text-color">Our Restaurant</span>
                          </h3>
                          <p>
                            Location is nearly as important as the quality of
                            your food to new customers.
                          </p>
                        </div>
                        <div className="d-flex justify-content-md-end">
                          <a className="create1" onClick={togglePopup1}>
                            <i className="fa-solid fa-circle-plus" />
                          </a>
                        </div>
                      </center>
                      {showPopup && (
                        <>
                          <div
                            className="container-fluid"
                            style={{ padding: "0px" }}
                          >
                            <div className=" popup">
                              <div className="popup-inner">
                                <div className="d-flex justify-content-md-end">
                                  <a className="create1" onClick={togglePopup}>
                                    <i class="fa-solid fa-xmark"></i>
                                  </a>
                                </div>
                                <Formik
                                  initialValues={getdata1}
                                  enableReinitialize={true}
                                  onSubmit={async (values) => {
                                    console.log(values);
                                    if (getempid) {
                                      axios
                                        .put(
                                          `http://localhost:3000/choosers/update/${getempid}`,
                                          values
                                        )
                                        .then((res) => {
                                          console.log(res);
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    } else {
                                      axios
                                        .post(
                                          "http://localhost:3000/choosers/add",
                                          values
                                        )
                                        .then((res) => {
                                          console.log(res);
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }
                                  }}
                                >
                                  <Form name="form">
                                    <div className="form_wrap">
                                      <div className="form_item">
                                        {/* <label>no</label> */}
                                        <Field type="text" name="no" placeholder="number" />
                                        <div className="number" id="no" />
                                      </div>
                                    </div>
                                    <div className="form_wrap">
                                      <div className="form_item">
                                        {/* <label>Title</label> */}
                                        <Field type="text" name="title" placeholder="title" />
                                        <div className="name" id="title" />
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

                      

                      <div className="row">
                        {getdata.map((el, index) => {
                          return (
                            <Choosecardprops
                              no={el.no}
                              title={el.title}
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
                    </div>
                  </section>
                  {/* End Whu Us Section */}

                  {/* ======= Menu Section ======= */}
                  <div className="container">
                    <center>
                      <div className="rsection-title mt-5">
                        <h2>
                          Check our tasty <span>Menu</span>
                        </h2>
                        <p>
                          Location is nearly as important as the quality of your
                          food to new customers.
                        </p>
                      </div>
                      <div className="d-flex justify-content-md-end">
                        <a className="create1" onClick={togglePopup1}>
                          <i className="fa-solid fa-circle-plus" />
                        </a>
                      </div>
                    </center>
                    <div className="menu-card">
                      <div className="card">
                        <img src="Image/Menu/red_velvet.jpg" alt="" />
                        <div className="card-body">
                          <p className="card-sub-title">Apple Cake</p>
                          <p className="card-info">
                            This easy recipe for apple cake is a wonderful way
                            to showcase fresh apples. Soft and tender with a
                            stick-to-your-fork moist crumb and juicy apples in
                            every bite, this cake is delicious plain, topped
                            with buttery brown sugar glaze, or even a quick
                            dusting of confectioners’ sugar.
                          </p>
                          <div className="d-flex">
                            <i className="fa-solid fa-pen-to-square" />
                            <i className="fa-solid fa-trash-can" />
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <img src="Image/Menu/punjabi.jpg" alt="" />
                        <div className="card-body">
                          <p className="card-sub-title">Apple Cake</p>
                          <p className="card-info">
                            Punjabi food is also rich in vegetables, lentils and
                            grains and reflects its dominant agrarian
                            legacy.Punjabi food is also rich in vegetables,
                            lentils and grains and reflects its dominant
                            agrarian legacy.
                          </p>
                          <button className="card-btn">Order Now</button>
                        </div>
                      </div>

                      <div className="card">
                        <img src="Image/Menu/rose_lassi.jpg" alt="" />
                        <div className="card-body">
                          <p className="card-sub-title">Apple Cake</p>
                          <p className="card-info">
                            Lassi originated in the Punjab region of the Indian
                            subcontinent. The word lassi means yogurt mixed with
                            water in Punjabi.
                          </p>
                          <button className="card-btn">Order Now</button>
                        </div>
                      </div>
                    </div>

                    <div className="menu-card">
                      <div className="card">
                        <img src="Image/Menu/coco.jpeg" alt="" />
                        <div className="card-body">
                          <p className="card-sub-title">Apple Cake</p>
                          <p className="card-info">
                            This easy recipe for apple cake is a wonderful way
                            to showcase fresh apples. Soft and tender with a
                            stick-to-your-fork moist crumb and juicy apples in
                            every bite, this cake is delicious plain, topped
                            with buttery brown sugar glaze, or even a quick
                            dusting of confectioners’ sugar.
                          </p>
                          <button className="card-btn">Order Now</button>
                        </div>
                      </div>

                      <div className="card">
                        <img src="Image/Menu/ice_cream.jpg" alt="" />
                        <div className="card-body">
                          <p className="card-sub-title">Apple Cake</p>
                          <p className="card-info">
                            This easy recipe for apple cake is a wonderful way
                            to showcase fresh apples. Soft and tender with a
                            stick-to-your-fork moist crumb and juicy apples in
                            every bite, this cake is delicious plain, topped
                            with buttery brown sugar glaze, or even a quick
                            dusting of confectioners’ sugar.
                          </p>
                          <button className="card-btn">Order Now</button>
                        </div>
                      </div>

                      <div className="card">
                        <img src="Image/Menu/toranto.jpg" alt="" />
                        <div className="card-body">
                          <p className="card-sub-title">Apple Cake</p>
                          <p className="card-info">
                            This easy recipe for apple cake is a wonderful way
                            to showcase fresh apples. Soft and tender with a
                            stick-to-your-fork moist crumb and juicy apples in
                            every bite, this cake is delicious plain, topped
                            with buttery brown sugar glaze, or even a quick
                            dusting of confectioners’ sugar.
                          </p>
                          <button className="card-btn">Order Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Menu Section */}

                  {/* ======= Events Section ======= */}
                  <section id="events" className="events">
                    <div className="container">
                      <center>
                        <div>
                          <h4 style={{ color: "white" }}>
                            Organize Your <span>Events</span> in our Restaurant
                          </h4>
                        </div>
                      </center>

                      <div className="events-slider swiper">
                        <div className="swiper-wrapper">
                          <Carousel autoplay>
                            <div>
                              <div className="swiper-slide">
                                <div className="row event-item">
                                  <div className="col-lg-6">
                                    <img
                                      src="Image/Event/birthday.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Birthday Parties</h3>
                                    <div className="price">
                                      <p>
                                        <span>₹15000</span>
                                      </p>
                                    </div>
                                    <p
                                      className="fst-italic"
                                      style={{ fontSize: 15 }}
                                    >
                                      Celebrate your birthday by seeing a play,
                                      having a picnic in the park, visiting an
                                      escape room, or just chilling at home. Or
                                      go the traditional route and have a
                                      birthday party.
                                    </p>
                                    <ul style={{ fontSize: "small" }}>
                                      <li>
                                        <i className="bi bi-check-circle" />
                                        They are a time to celebrate, reflect,
                                        and show appreciation for the life we
                                        have been given.
                                      </li>
                                      <li>
                                        <i className="bi bi-check-circle" />{" "}
                                        These may include a complimentary room
                                        upgrade, a bottle of champagne or
                                        sparkling wine upon arrival, or a
                                        special birthday-themed welcome gift.
                                      </li>
                                    </ul>
                                    <p style={{ fontSize: 15 }}>
                                      Birthdays remind us to celebrate those
                                      special people, as well as their gifts and
                                      thank God for placing them in our lives.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="swiper-slide">
                              <div className="row event-item">
                                <div className="col-lg-6">
                                  <img
                                    src="Image/Event/privtate.jpg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                  <h3>Private Parties</h3>
                                  <div className="price">
                                    <p>
                                      <span>₹20000</span>
                                    </p>
                                  </div>
                                  <p
                                    className="fst-italic"
                                    style={{ fontSize: 15 }}
                                  >
                                    private party means a gathering of persons
                                    for a special occasion; such as a wedding,
                                    an anniversary, a luau, etc., where food and
                                    drinks are served.
                                  </p>
                                  <ul style={{ fontSize: "small" }}>
                                    <li>
                                      <i className="bi bi-check-circle" />
                                      Private industries and services are owned
                                      or controlled by an individual person or a
                                      commercial company, rather than by the
                                      state or an official organization.
                                    </li>
                                    <li>
                                      <i className="bi bi-check-circle" />{" "}
                                      Private events are exclusive gatherings
                                      that are not open to the general public.
                                    </li>
                                  </ul>
                                  <p style={{ fontSize: 15 }}>
                                    VIP Events are private events as they are
                                    not open to the general public and are, by
                                    definition, invitation-only. Invitees to VIP
                                    events are not, however, necessarily known
                                    to one another.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="swiper-slide">
                              <div className="row event-item">
                                <div className="col-lg-6">
                                  <img
                                    src="Image/Event/anniversary.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                  <h3>Anniversary Parties</h3>
                                  <div className="price">
                                    <p>
                                      <span>₹12000</span>
                                    </p>
                                  </div>
                                  <p
                                    className="fst-italic"
                                    style={{ fontSize: 15 }}
                                  >
                                    Anniversary parties are special because they
                                    bring back fond memories of a couple's
                                    special day.
                                  </p>
                                  <ul style={{ fontSize: "small" }}>
                                    <li>
                                      <i className="bi bi-check-circle" />
                                      Throw a Romantic Candlelit Anniversary
                                      Dinner Party.
                                    </li>
                                    <li>
                                      <i className="bi bi-check-circle" />{" "}
                                      Celebrate Your Movie-Like Romance with a
                                      Movie Night.
                                    </li>
                                    <li>
                                      <i className="bi bi-check-circle" />
                                      The services offered for grand anniversary
                                      celebrations at The Enjoy City are
                                      par-excellent.{" "}
                                    </li>
                                  </ul>
                                  <p style={{ fontSize: 15 }}>
                                    It is also a celebration of the couple's
                                    enduring commitment and love to each other.
                                    Commemorate this special occasion by
                                    celebrating it with relatives and friends by
                                    holding an anniversary party.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Events Section */}

                  {/* ======= Gallery Section ======= */}
                  <div className="container">
                    <div className="portfolio">
                      <center>
                        <div className="rsection-title">
                          <h2>
                            Some photos from <span>Our Restaurant</span>
                          </h2>
                          <p>
                            A restaurant is a business that prepares and serves
                            food and drinks to customers.
                          </p>
                        </div>
                      </center>
                      <div className="d-flex justify-content-md-end">
                        {/* <a className="create1" onClick={() => history.push('/galleryprops')}>
                          <i className="fa-solid fa-circle-plus" />
                        </a> */}
                        <a className="create1" onClick={togglePopup2}>
                          <i className="fa-solid fa-circle-plus" />
                        </a>
                      </div>
                      <div className="container">
                        {
                          showPopupgallery && (
                            <>
                              <div
                                className="container-fluid"
                                style={{ padding: "0px" }}
                              >
                                <div className="popup">
                                  <div className="popup-inner">
                                    <div className="d-flex justify-content-md-end">
                                      <a className="create1" onClick={() => setShowPopupgallery(false) }>
                                        <i class="fa-solid fa-xmark"></i>
                                      </a>
                                    </div>
                                    <Formik
                                      initialValues={{
                                        image: ""
                                      }}
                                      onSubmit={async (values) => {
                                        const formData = new FormData(); // Create FormData object to send file
                                        formData.append("image", image); // Append image file to FormData

                                        axios
                                          .post("http://localhost:3000/rgallery/add", formData)
                                          .then((res) => {
                                            console.log(res);
                                            setShowPopupgallery(false) 
                                          })
                                          .catch((error) => {
                                            console.log(error);
                                          });
                                      }}
                                    >
                                      <Form name="form">
                                        <div className="form_wrap">
                                          <div className="form_item">
                                            <label>Image</label>
                                            <input
                                              type="file"
                                              id="formFile"
                                              onChange={(e) => setImage(e.target.files[0])} // Update selected image file
                                            />
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
                          )
                        }

                        <div className="row r1">
                          {getdata3.map((el, index) => {
                            return (
                              <Gallerycardprops
                                image={
                                  "http://localhost:3000/images/" + el.image
                                }
                                delete={
                                  <i
                                    className="fa-solid fa-trash-can"
                                    onClick={() => delhandel4(el._id)}
                                  />
                                }
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Gallery Section */}

                  {/* ======= Chefs Section ======= */}
                  <div className="container">
                    <center>
                      <div className="rsection-title">
                        <h2>
                          Our Proffesional <span>Chefs</span>
                        </h2>
                        <p>
                          Our professional chef directs food preparation and
                          oversees kitchen operations in restaurants.
                        </p>
                      </div>
                    </center>
                    <div className="d-flex justify-content-md-end">
                      <a className="create1" onClick={() => history.push('/chefprops')}>
                        <i className="fa-solid fa-circle-plus" />
                      </a>
                    </div>
                    <div className="card__container">
                      {getdata4.map((el, index) => {
                        return (
                          <Chefcardprops
                            image={
                              "http://localhost:3000/images/" + el.image
                            }
                            name={el.name}
                            profession={el.profession}
                            update={
                              <i
                                className="fa-solid fa-pen-to-square"
                                onClick={() => updatehandle5(el._id)}
                              />
                            }
                            delete={
                              <i
                                className="fa-solid fa-trash-can"
                                onClick={() => delhandel5(el._id)}
                              />
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                  {/* End Chefs Section */}
                </main>
              </div>
              {/* End #main */}
              <Footer />
            </section>
          </>
        }
      />
    </div>
  );
};
