import React, { useEffect, useRef } from "react";
import "./Elegence.css";
import gsap from "gsap";
import Clients from "../../components/Clients/Clients";
import Newsletter from "../../components/Newsletter/NewsLetter";
import { minimalelegence } from "../../assets/assets";
import Item from "../Item/Item";

const Elegence = ({ backgroundImg, heading }) => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  useEffect(() => {
    // Split heading into letters
    const headingLetters = headingRef.current.innerText.split("");
    headingRef.current.innerHTML = headingLetters
      .map(
        (char) =>
          `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`
      )
      .join("");

    // Split paragraph into words
    const paraWords = paraRef.current.innerText.split(" ");
    paraRef.current.innerHTML = paraWords
      .map((word) => `<span class="word">${word}&nbsp;</span>`)
      .join("");

    // Animate heading letters
    gsap.fromTo(
      headingRef.current.querySelectorAll(".letter"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "back.inOut",
      }
    );

    // Animate paragraph words
    gsap.fromTo(
      paraRef.current.querySelectorAll(".word"),
      { opacity: 0, y: 230 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1, // starts after heading finishes
      }
    );
  }, []);
  return (
    <>
      <div className="elegence">
        <div className="bgimg">
          <img ref={paraRef} src={backgroundImg} alt={heading} />
        </div>
        <div className="textdiv">
          <h2 ref={headingRef}>{heading}</h2>
        </div>
      </div>
                  <div className="minimalcollection" >
        {minimalelegence.map((ui, i) => {
          return (
            <Item
              key={i}
              id={ui.id}
              image={ui.image}
              price={ui.price}
              name={ui.name}
            />
          );
        })}
      </div>
      <Clients />
      <Newsletter />
    </>
  );
};

export default Elegence;
