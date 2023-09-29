import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Activities from "../Activities";
import DogBreeds from "../DogBreeds";
import FAQ from "../FAQ";
import Health from "../Health";
import Home from "../Home";
import Resources from "../Resources";
import Training from "../Training";
import NotFound404 from "../NotFound404";
import SingleDog from "./SingleDog";
import logo from "../data/images/logo.png";
import "./navbar.css";
import {ImHome} from 'react-icons/im'
import {PiDogDuotone} from 'react-icons/pi'
import {MdHealthAndSafety} from 'react-icons/md'
import {GrResources} from 'react-icons/gr'
import {FaQuestionCircle,FaDog} from 'react-icons/fa'
import {GiJumpingDog} from 'react-icons/gi'
import {RxActivityLog} from 'react-icons/rx'
const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container-fluid justify-content-around">
            <a className="navbar-brand" href="#">
              <img src={logo} width="250" height="50" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <ImHome className="icon"/>
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className ="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ><PiDogDuotone className="icon"/>
                    Canine Corner
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link to="/breeds" className="nav-link">
                        <FaDog className="icon"/> 
                        Dog Breeds
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/training" className="nav-link">
                        <GiJumpingDog className="icon"/>
                        Training and Behaviour
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/activities" className="nav-link">
                        <RxActivityLog className="icon"/>
                        Dog Activities
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/health" className="nav-link">
                    <MdHealthAndSafety className="icon"/>
                    Health and Care
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/resources" className="nav-link">
                    <GrResources className="icon"/>
                    Resources
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/faq" className="nav-link">
                    <FaQuestionCircle className="icon"/>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="activities" element={<Activities />}></Route>
          <Route path="breeds" element={<DogBreeds />}></Route>
          <Route path="faq" element={<FAQ />}></Route>
          <Route path="health" element={<Health />}></Route>
          <Route path="resources" element={<Resources />}></Route>
          <Route path="training" element={<Training />}></Route>
          <Route path="breeds/:name" element={<SingleDog />} />
          <Route path = "*" element={<NotFound404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
