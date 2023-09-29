import React from "react";
// import insta from "../data/images/insta.png";
// import face from "../data/images/face.jpeg";
// import mail from "../data/images/ma.png";
import footer from '../data/images/footer.png'
import {TfiInstagram,TfiEmail} from 'react-icons/tfi'
import {RiTwitterXLine} from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <div className="row footer">
        <div className="container">
          <img src={footer} width="250px" height="100px" className="footer-logo"/>
        </div>
        <div className="col-lg-4">
          <h3>SITEMAP</h3>
          <ul type="none">
            <li>
              <a href="./" className="footer-link">Home</a>
            </li>
            <li>
              <a href="./breeds" className="footer-link">Dog Breeds</a>
            </li>
            <li>
              <a href="./training" className="footer-link">Training and Behavior</a>
            </li>
            <li>
              <a href="./activities" className="footer-link">Dog Activities</a>
            </li>
            <li>
              <a href="./health" className="footer-link">Health and Care</a>
            </li>
            <li>
              <a href="./resources" className="footer-link">Resources</a>
            </li>
            <li>
              <a href="./faq" className="footer-link">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h3>Our Mission and Goals</h3>
          <p className="footer-body">
            At our website DoggyDiveIn, our mission is deeply rooted in a profound love
            and respect for dogs. We are dedicated to serving as a valuable
            resource and a trusted companion on every dog owner's journey.
          </p>
        </div>
        <div className="col-lg-4">
          <h3>FEEL FREE TO CONNECT WITH US</h3>
          <ul type="none">
            <li>
            <a href="https://www.instagram.com" className="footer-link">
                <TfiInstagram className="icon"/><span className="m-1">woofcommunity</span>
              </a>
            </li>
            <li>
            <a href="https://www.twitter.com" className="footer-link">
                <RiTwitterXLine className="icon"/><span className="m-1">woofcommunity</span>
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com" className="footer-link">
                <BsLinkedin className="icon"/><span className="m-1">woofcommunity</span>
              </a>
            </li>
            <li>
            <a href="https://www.gmail.com" className="footer-link">
                <TfiEmail className="icon"/><span className="m-1">woofcommunity</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
