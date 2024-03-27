import React, { useEffect, useState, useRef } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  ComposedChart,
  Area,
  ResponsiveContainer,
  Line,
} from "recharts";
import axios from "axios";
import "./index.css";
import { Bookingcardprops } from "./Bookingcardprops";
import { Header } from "../header/Header";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
// import { Tryprops } from "./tryprops";
import CountUp from "react-countup";
import { Tryprops } from "./tryprops";
import { Usercardprops } from "./Usercardprops";

export const Index = () => {
  const componentPDF = useRef();
  const [getbooking, setbooking] = useState([]);
  const [includeDeleteColumn, setIncludeDeleteColumn] = useState(true);

  // console.log(getbooking);
  useEffect(() => {
    const registerAppointment = async () => {
      axios
        .get("http://localhost:3000/booking/view")
        .then((res) => {
          // console.log(res.data.data);
          setbooking(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    registerAppointment();
  });

  const genratePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "bookingdata",
    // onAfterPrint: () => alert("data saved in pdf"),
  });

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

  const filteredBookDataByJunior = getbookdata.filter(
    (booking) => booking.room === "Junior Suite"
  );
  const totalJunior = filteredBookDataByJunior.length;
  // console.log(filteredBookDataByRoom);
  const filteredBookDataByLuxury = getbookdata.filter(
    (booking) => booking.room === "Luxury Room"
  );
  const totalLuxury = filteredBookDataByLuxury.length;
  // console.log(filteredBookDataByLuxury);
  const filteredBookDataBySuper = getbookdata.filter(
    (booking) => booking.room === "Super Deluxe"
  );

  const SuperDeluxe = filteredBookDataBySuper.length;
  // console.log(filteredBookDataBySuper);

  const totelbooking = getbookdata.length;
  // console.log(totelbooking);

  /**********services */
  const [getservicedata, setservicedata] = useState([]);
  // console.log(getservicedata);

  const totalservice = getservicedata.length;

  useEffect(() => {
    axios
      .get("http://localhost:3000/service/view")
      .then((res) => {
        // console.log(res.data.data);
        setservicedata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /**********room */
  const [getroomdata, setroomdata] = useState([]);
  // console.log(getservicedata);

  const totalroom = getroomdata.length;

  useEffect(() => {
    axios
      .get("http://localhost:3000/room/view")
      .then((res) => {
        // console.log(res.data.data);
        setroomdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /**********our team */

  const [getstaffdata, setstaffdata] = useState([]);
  // console.log(getservicedata);

  const totalstaff = getstaffdata.length;

  useEffect(() => {
    axios
      .get("http://localhost:3000/staff/view")
      .then((res) => {
        // console.log(res.data.data);
        setstaffdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const data = [
    { name: "Total Booking", number: totelbooking, pv: 2400, amt: 2400 },
    { name: "Total Service", number: totalservice, pv: 2400, amt: 2400 },
    { name: "Total Room", number: totalroom, pv: 2400, amt: 2400 },
    { name: "Total Staff", number: totalstaff, pv: 2400, amt: 2400 },
  ];

  const data01 = [
    { name: "Junior Suite Room", value: totalJunior },
    { name: "Luxury Room", value: totalLuxury },
    { name: "Super Deluxe", value: SuperDeluxe },
  ];

  const delhandel1 = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/booking/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const getfromdate = (e) => {
    const date = moment(e).format("DD/MM/YYYY");
    setStartDate(date);
  };
  const gettodate = (e) => {
    const date = moment(e).format("DD/MM/YYYY");
    setEndDate(date);
  };

  // const [getFilteredData, setFilteredData] = useState([]);

  // const handleDateFilter = () => {
  //   const filteredResult = getbookdata.filter((item) => {
  //     const itemDate = new Date(item.checkin);
  //     const checkdate = moment(itemDate).format("DD/MM/YYYY");

  //     return checkdate >= startDate && checkdate <= endDate;
  //   });

  //   console.log(filteredResult);

  //   setFilteredData(filteredResult);
  // };
  const [getFilteredData, setFilteredData] = useState([]);

  const handleDateFilter = () => {
    const formattedStartDate = moment(startDate, "DD/MM/YYYY").toDate();
    const formattedEndDate = moment(endDate, "DD/MM/YYYY").toDate();

    const filteredResult = getbookdata.filter((item) => {
      const itemDate = new Date(item.checkin);

      const checkdate = moment(itemDate).format("DD/MM/YYYY");

      return itemDate >= formattedStartDate && itemDate <= formattedEndDate;
    });

    console.log(filteredResult);

    setFilteredData(filteredResult);
  };

  /************************* user view */
  const [getuserdata, setuserdata] = useState([]);
  // console.log(getbookdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/view")
      .then((res) => {
        // console.log(res.data.data);
        setuserdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const delhandel2 = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/user/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const totalbookings = getFilteredData.length;
  return (
    <Sidebar
      index={
        <>
          <Header />
          <section className="home-section">
            <div
              className="d-flex"
              style={{ justifyContent: "space-evenly" }}
              // className="card-contanier d-flex"
              // style={{ justifyContent: "space-around" }}
            >
              <div className="card1 c1_card">
                <div className="card1-details1">
                  <div className="text-title1" style={{ fontSize: "200%" }}>
                    <i className="fa-solid fa-calendar-plus" />
                  </div>
                  <p className="text-title1">Total Booking</p>
                  <p className="text-body1">
                    <CountUp start={0} end={totelbooking} duration={4} />
                  </p>
                </div>
              </div>
              <div className="card1 c2_card">
                <div className="card1-details1">
                  <div className="text-title1" style={{ fontSize: "200%" }}>
                    <i class="fa-solid fa-bell-concierge"></i>
                  </div>
                  <p className="text-title1">Total Service</p>
                  <p className="text-body1">
                    <CountUp start={0} end={totalservice} duration={4} />
                  </p>
                </div>
              </div>
              <div className="card1 c3_card">
                <div className="card1-details1">
                  <div className="text-title1" style={{ fontSize: "200%" }}>
                    <i class="fa-solid fa-bed"></i>
                  </div>
                  <p className="text-title1">Total Room</p>
                  <p className="text-body1">
                    <CountUp start={0} end={totalroom} duration={4} />
                  </p>
                </div>
              </div>
              <div className="card1 c4_card">
                <div className="card1-details1">
                  <div className="text-title1" style={{ fontSize: "200%" }}>
                    <i class="fa-solid fa-people-line"></i>
                  </div>
                  <p className="text-title1">Total Staff</p>
                  <p className="text-body1">
                    <CountUp start={0} end={totalstaff} duration={4} />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", padding: "50px" }}
            >
              <div className="reports">
                <BarChart width={500} height={420} data={data}>
                  <XAxis dataKey="name" stroke="#00008b" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  {/* <Bar dataKey="number" fill="#00008b" barSize={30} /> */}
                  <Bar dataKey="number" fill="#3792cb" barSize={30} />
                </BarChart>
                <h5 style={{ textAlign: "center" }}>
                  <b>Reports</b>
                </h5>
              </div>

              {/* Pie Chart start For Room */}
              <div className="reports">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx={200}
                    cy={200}
                    outerRadius={100}
                    fill="#296d98"
                    label
                  />
                  <Tooltip />
                </PieChart>
                <h5 style={{ textAlign: "center" }}>
                  <b>Booking Reports</b>
                </h5>
              </div>
            </div>

            <div className="container">
              <h1 style={{ marginTop: "30px" }}>User Details</h1>
              <table className="table table-bordered">
                <thead>
                  <tr style={{ backgroundColor: "#031273", color: "white" }}>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">EMail</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "#c8deff" }}>
                  {getuserdata.map((el, index) => {
                    return (
                      <Usercardprops
                        counter={index + 1}
                        name={el.name}
                        mno={el.mno}
                        email={el.email}
                        delete={
                          <i
                            className="fa-solid fa-trash-can"
                            onClick={() => delhandel2(el._id)}
                          />
                        }
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="container2">
              <h1 style={{ marginTop: "30px" }}>Booking Details</h1>
              <table className="table table-bordered">
                <thead>
                  <tr style={{ backgroundColor: "#031273", color: "white" }}>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Checkin</th>
                    <th scope="col">Checkout</th>
                    <th scope="col">Adult No</th>
                    <th scope="col">Child No</th>
                    <th scope="col">Room</th>
                    <th scope="col">Message</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "#c8deff" }}>
                  {getbookdata.map((el, index) => {
                    const date = moment(el.checkin).format("MM/DD/YYYY");
                    const date1 = moment(el.checkout).format("MM/DD/YYYY");
                    return (
                      <Bookingcardprops
                        counter={index + 1}
                        name={el.name}
                        email={el.email}
                        checkin={date}
                        checkout={date1}
                        adultno={el.adultno}
                        childno={el.childno}
                        room={el.room}
                        message={el.message}
                        delete={
                          <i
                            className="fa-solid fa-trash-can"
                            onClick={() => delhandel1(el._id)}
                          />
                        }
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <label>From Date:</label>
                <input
                  type="date"
                  onChange={(e) => getfromdate(e.target.value)}
                  className="me-4 date-style"
                />

                <label>To Date:</label>
                <input
                  type="date"
                  onChange={(e) => gettodate(e.target.value)}
                  className="date-style"
                />
              </div>

              <div>
                <button
                  onClick={handleDateFilter}
                  className="me-2 convert_button"
                >
                  Filter Data
                </button>
                <button
                  style={{ backgroundColor: "darkblue" }}
                  className="me-2"
                  onClick={() => setIncludeDeleteColumn(!includeDeleteColumn)}
                >
                  {includeDeleteColumn
                    ? "Hide Delete Column"
                    : "Show Delete Column"}
                </button>

                <button
                  type="submit"
                  onClick={genratePDF}
                  className="me-2 convert_button"
                >
                  Convert To PDF
                </button>
              </div>
            </div>

            {getFilteredData.length > 0 && (
              <div ref={componentPDF}>
                <table className="table table-bordered">
                  <thead>
                    <tr style={{ backgroundColor: "#031273", color: "white" }}>
                      <th scope="col">No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Checkin</th>
                      <th scope="col">Checkout</th>
                      <th scope="col">Adult No</th>
                      <th scope="col">Child No</th>
                      <th scope="col">Room</th>
                      <th scope="col">Message</th>
                      {includeDeleteColumn && <th scope="col">Delete</th>}
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "#c8deff" }}>
                    {getFilteredData.map((el, index) => {
                      const startdate = moment(el.checkin).format("MM/DD/YYYY");
                      const enddate = moment(el.checkout).format("MM/DD/YYYY");
                      return (
                        <Tryprops
                          counter={index + 1}
                          name={el.name}
                          email={el.email}
                          checkin={startdate}
                          checkout={enddate}
                          adultno={el.adultno}
                          childno={el.childno}
                          room={el.room}
                          message={el.message}
                          delete={
                            includeDeleteColumn && (
                              <i
                                className="fa-solid fa-trash-can"
                                onClick={() => delhandel1(el._id)}
                              />
                            )
                          }
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/*  */}
          </section>
        </>
      }
    />
  );
};
