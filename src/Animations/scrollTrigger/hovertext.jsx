import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./hovertext.css";

const HoverShakeText = () => {
  const textRef = useRef(null);
  const hoverTween = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".char");

    const handleMouseEnter = () => {
      hoverTween.current = gsap.to(letters, {
        y: -5,
        rotation: 5,
        stagger: 0.05,
        duration: 0.2,
        ease: "ease.inOut",
        repeat: -1,      // infinite repeat
        yoyo: true       // go back and forth
      });
    };

    const handleMouseLeave = () => {
      if (hoverTween.current) hoverTween.current.kill(); // stop shaking
      gsap.to(letters, {
        y: 0,
        rotation: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const el = textRef.current;
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const text = "Hover to Shake!";

  return (
    <section className="text-section">
      <h1 ref={textRef} className="split-text">
        {text.split("").map((char, i) => (
          <span key={i} className="char">
            {char}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default HoverShakeText;
