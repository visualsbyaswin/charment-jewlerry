import React from "react";
import "./newsletter.css";
import { assets } from "../../assets/assets";
import TestimonialSlider from "../../Animations/Slider/hover";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <img
        src={assets.newletter}
        alt="Ring"
        className="newsletter-img"
      />
      <h2 className="newsletter-title">NEWSLETTER</h2>
      <p className="newsletter-subtitle">
        Insights, inspiration, and exclusives.
      </p>

      <form className="newsletter-form">
        <input
          type="email"
          placeholder="madebyeaswin@gmail.com"
          className="newsletter-input"
          required
        />
        <button type="submit" className="newsletter-btn">
          Submit
        </button>
      </form>
   
    </section>
  );
};

export default Newsletter;
