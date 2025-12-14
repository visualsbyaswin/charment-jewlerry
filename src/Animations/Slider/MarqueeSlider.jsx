



import React from "react"
import {images} from "../../assets/images"
import "./marquee.css"
const Slider2=()=>{
  return(
    <div className="slider">
      <div className="slider-track">
        {[...images,...images,...images,...images].map((img,i)=>(
          <div className="slideritem" key={i}>
            <img src={img} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Slider2