import React, { useRef } from "react";
import "./newcollection.css";
import Item from "../Item/Item";
import { gsap } from "gsap";
import { brandNewcollection } from "../../assets/assets";
import { Link } from "react-router-dom";
const Newcollection = () => {

  const textref=useRef(null);

  const handleclick=()=>{
    const el=textref.current;
    const chars=el.innerTect.split("");


    el.innerHtml=chars.map((char)=>`<span class="char">${char}</span>`).join("");


    gsap.fromTo(
    el.querySelectorAll(".char"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(2)",
      }
    );
  }
  return (
    <section className="newcollection">
      <div className="newstheading">
        <div className="newh1head">
          <h1 onClick={handleclick}>Newest Items</h1>
        </div>
        <div className="endoption">
          <Link to="/shop">
            {" "}
            <p>View All </p>
          </Link>
        </div>
      </div>
      <div className="newsetimages">
        {brandNewcollection.map((newitems, i) => {
          return (
            <Item
              key={i}
              id={newitems.id}
              image={newitems.image}
              price={newitems.price}
              name={newitems.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Newcollection;
