import React from "react";
import "./client.css";
// import MarqueeSlider from "../../Animations/Slider/MarqueSlider2";
import Slider1 from "../../Animations/Slider/MarqueSlider2";
import Slider2 from "../../Animations/Slider/MarqueeSlider";
import AutoSlider from "../../Animations/Slider/Slider";


const Clients = () => {
  return (
    <section className="clientserver">
      <div className="clienth1">
        <p>happy Clients</p>
      </div>
      <Slider1 />
      <Slider2 />
      <AutoSlider/>
    </section>
  );
};

export default Clients;
