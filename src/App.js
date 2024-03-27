import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./Components/about/About";
import { Sidebar } from "./Components/sidebar/Sidebar";
import { Home, Index } from "./Components/index/Index";
import { Room } from "./Components/room/Room";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/footer/Footer";
import { Roomprops } from "./Components/room/Roomprops";
import { Service } from "./Components/service/Service";
import { Team } from "./Components/team/Team";
import { Gallery } from "./Components/gallery/Gallery";
// import { Teamprops } from './Components/team/teamprops';
import { Serviceprops } from "./Components/service/Serviceprops";
import { Chooseprops } from "./Components/restaurant/chooseprops";
import { Specialmenu } from "./Components/restaurant/specialmenu";
import React from "react";
import { Galleryprops } from "./Components/restaurant/galleryprops";
import { Chefprops } from "./Components/restaurant/Chefprops";
import { Signup } from "./Components/signup/Signup";
import { Trydemo } from "./Components/Trydemo/Trydemo";
import { Tryprops } from "./Components/index/tryprops";
import { Restaurant } from "./Components/hotelrest/Restaurant";
import { Protector } from "./Components/protector";
import { Contact } from "./Components/contact/Contact";
import { Feedback } from "./Components/feedback/Feedback";

function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      {/* <Header/> */}
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/index">
          <Protector>
            <Index />
          </Protector>
        </Route>
        <Route path="/about">
          <Protector>
            <About />
          </Protector>
        </Route>
        <Route path="/room">
          <Protector>
            <Room />
          </Protector>
        </Route>
        <Route path="/roomprops">
          <Roomprops />
        </Route>
        <Route path="/service">
          <Protector>
            <Service />
          </Protector>
        </Route>
        <Route path="/serviceprops">
          <Serviceprops />
        </Route>
        <Route path="/specialmenu">
          <Specialmenu />
        </Route>
        <Route path="/team">
          <Protector>
            <Team />
          </Protector>
        </Route>
        <Route path="/gallery">
          <Protector>
            <Gallery />
          </Protector>
        </Route>
        <Route path="/galleryprops">
          <Galleryprops />
        </Route>
        <Route path="/chooseprops">
          <Chooseprops />
        </Route>
        <Route path="/chefprops">
          <Chefprops />
        </Route>
        <Route path="/Trydemo">
          <Trydemo />
        </Route>
        <Route path="/hotelrest">
          <Protector>
            <Restaurant />
          </Protector>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/feedback">
          <Feedback/>
        </Route>
        <Route path="/tryprops">
          <Tryprops />
        </Route>
        {" "}
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
