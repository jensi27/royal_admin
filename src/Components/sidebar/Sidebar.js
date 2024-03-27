import React, { useState } from "react";
import "./Sidebar.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Flex } from "antd";

export const Sidebar = (props) => {
  const [getvalue, setvalue] = useState(true);
  // console.log(getvalue);
  const history = useHistory();
  return (
    <div>
      <div className="sidebar" style={{ width: getvalue ? "5%" : "15%" }}>
        <div
          className="logo-details data"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/* <div className="logo_name">The Royal</div> */}
          <div>
            <i
              className="fa-solid fa-bars"
              onClick={() => {
                setvalue(false);
              }}
              style={{ display: getvalue ? "block" : "none" }}
              id="btn"
            />
          </div>
          <div
            className="logo-details"
            style={{ display: "flex", justifyContent: "right" }}
          >
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                setvalue(true);
              }}
              style={{ display: getvalue ? "none" : "block" }}
            ></i>
          </div>
        </div>

        <ul className="nav-list">
          <li>
            <li onClick={() => history.push("/index")}>
              <i className="fa-solid fa-house" />
              <span className="links_name">Dashboard</span>
            </li>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <li onClick={() => history.push("/about")}>
              <i class="fa-solid fa-table-cells-large"></i>
              <span className="links_name">About</span>
            </li>
            <span className="tooltip">About</span>
          </li>
          <li>
            <li onClick={() => history.push("/room")}>
              <i class="fa-solid fa-bed"></i>
              <span className="links_name">Rooms</span>
            </li>
            <span className="tooltip">Rooms</span>
          </li>
          <li>
            <li onClick={() => history.push("/service")}>
              <i className="fa-solid fa-bell-concierge" />
              <span className="links_name">Service</span>
            </li>
            <span className="tooltip">Service</span>
          </li>
          <li>
            <li onClick={() => history.push("/team")}>
              <i className="fa-solid fa-people-group" />
              <span className="links_name">Team</span>
            </li>
            <span className="tooltip">Team</span>
          </li>
          <li>
            <li onClick={() => history.push("/gallery")}>
              <i className="fa-solid fa-image" />
              <span className="links_name">Gallery</span>
            </li>
            <span className="tooltip">Gallery</span>
          </li>
          <li>
            <li onClick={() => history.push("/hotelrest")}>
              <i className="fa-solid fa-utensils" />
              <span className="links_name">Restaurant</span>
            </li>
            <span className="tooltip">Restaurant</span>
          </li>
          <li>
            <li onClick={() => history.push("/contact")}>
              <i class="fa-regular fa-address-card"></i>
              <span className="links_name">Contact</span>
            </li>
            <span className="tooltip">Contact</span>
          </li>
          <li>
            <li onClick={() => history.push("/feedback")}>
              <i className="fa-solid fa-comment"></i>
              <span className="links_name">Feedback</span>
            </li>
            <span className="tooltip">Feedback</span>
          </li>
        </ul>
      </div>
      <div className="main-part" style={{ width: getvalue ? "101%" : "91%" }}>
        <div className="main">
          {props.index}
          {props.about}
          {props.room}
          {props.service}
          {props.team}
          {props.gallery}
          {props.restaurant}
          {props.login}
          {props.contact}
          {props.feedback}
        </div>
      </div>
    </div>
  );
};
