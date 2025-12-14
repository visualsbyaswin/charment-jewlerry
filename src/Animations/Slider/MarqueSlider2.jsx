

import React from "react"
import { images2 } from "../../assets/images"
import "./marquee2.css"

const Slider1 = (props) => {
  return (
    <div className="slider1">
      <div className="slider-track1">
        {[...images2, ...images2, ...images2, ...images2].map((img, i) => (
          <div className="slideritem1" key={i}>
            <img src={img} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider1
