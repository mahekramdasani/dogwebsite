import React from "react";
import insta from "../insta.png";
import face from "../face.jpeg";
import mail from "../ma.png";
import footer from '../footer.png'
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
              <a href="./product" className="footer-link">Products</a>
            </li>
            <li>
              <a href="./training" className="footer-link">Training and Behavior</a>
            </li>
            <li>
              <a href="./activities" className="footer-link">Dog Activities</a>
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
            At our website Woof, our mission is deeply rooted in a profound love
            and respect for dogs. We are dedicated to serving as a valuable
            resource and a trusted companion on every dog owner's journey.
          </p>
        </div>
        <div className="col-lg-4">
          <h3>FEEL FREE TO CONNECT WITH US</h3>
          <ul type="none">
            <li>
            <a href="https://www.instagram.com" className="footer-link">
                <i className="fab fa-instagram"></i>woofcommunity
              </a>
            </li>
            <li>
            <a href="https://www.twitter.com" className="footer-link">
                <i className="fab fa-twitter"></i>woofcommunity
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com" className="footer-link">
                <i className="fab fa-linkedin"></i>woofcommunity
              </a>
            </li>
            <li>
            <a href="https://www.gmail.com" className="footer-link">
                <i className="fa fa-envelope"></i>woofcommunity
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
