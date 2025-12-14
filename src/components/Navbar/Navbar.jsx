import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import MailIcon from "../../assets/Svgs";
import HoverLogo from "../../Animations/Slider/hover";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 1) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener("scroll",HandleScroll);
    return()=>window.removeEventListener("scroll",HandleScroll)
  },[]);
  return (
    <header className={`header ${scrolled?"active":""}`}>
      <div className="headerimg">

       <Link to="/"> <HoverLogo/></Link>
      </div>
      <nav className="navbar">
        <ul>
       <Link to="/shop">   <li>shop</li></Link>
         <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <div>
          <MailIcon/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
