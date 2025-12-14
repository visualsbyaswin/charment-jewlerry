import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mainfooter">
      <div className="footeralltexts">
        <div className="fourbox">
          <div className="footerheading">
            <p>Contact</p>
          </div>
          <div className="contact">
            <p>123 Elegance Lane, Style City, NY 10001, USA</p>
            <p>hello@charmant.deisgn</p>
            <p>+1 999 888 777</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="fourbox">
          <div className="footerheading">
            <p>Menu</p>
          </div>
          <div className="menu">
          <Link to="/shop"> <p>Shop</p></Link> 
            <p>Minimalist Elegance</p>
            <p>Bridal Bliss</p>
            <p>Timeless Classics</p>
          </div>
        </div>
        <div className="fourbox">
          <div className="footerheading">
            <p>Useful</p>
          </div>
          <div className="useful">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms and Conditions</p>
            <p>Delivery and Return</p>
          </div>
        </div>
        <div className="fourbox">
          <div className="footerheading">
            <p>Follow Us</p>
          </div>
          <div className="followus">
            <p>X (Twitter)</p>
            <p>Framer</p>
            <p>Linkdin</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
      <div className="footerbiglogo">
        <img src={assets.biglogo} alt="" />
      </div>
      <div className="footesmalltexts">
        <p>© 2025 made by ASwin.design with in Framer</p>
      </div>
    </footer>
  );
};

export default Footer;
