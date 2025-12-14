import React from "react";
import "./hero.css";
import { assets } from "../../assets/assets";
const Hero = () => {
  return (
    <section className="herosection">
      <div className="backgroundimagehero">
        <img src={assets.heroimg} alt="" />
      </div>
      <div className="homecontents">
        <div className="childs">
          <h2>Jewelries That Radiates Charm</h2>
          <p>
            Discover elegant, one-of-a-kind jewelry crafted to elevate your
            everyday moments and unforgettable occasions.
          </p>

          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React, { useEffect, useRef } from "react";
// import "./hero.css";
// import gsap from "gsap";
// import { assets } from "../../assets/assets";
// const Hero = () => {
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);

//   useEffect(() => {
//     // Split heading into letters
//     const headingLetters = headingRef.current.innerText.split("");
//     headingRef.current.innerHTML = headingLetters
//       .map(
//         (char) =>
//           `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`
//       )
//       .join("");

//     // Split paragraph into words
//     const paraWords = paraRef.current.innerText.split(" ");
//     paraRef.current.innerHTML = paraWords
//       .map((word) => `<span class="word">${word}&nbsp;</span>`)
//       .join("");

//     // Animate heading letters
//     gsap.fromTo(
//       headingRef.current.querySelectorAll(".letter"),
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.05,
//         ease: "power3.out",
//       }
//     );

//     // Animate paragraph words
//     gsap.fromTo(
//       paraRef.current.querySelectorAll(".word"),
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power2.out",
//         delay: 1, // starts after heading finishes
//       }
//     );
//   }, []);

//   return (
//     <section className="herosection">
//       <div className="backgroundimagehero">
//         <img src={assets.heroimg} alt="" />
//       </div>
//       <div className="homecontents">
//         <div className="childs">
//           <h2 ref={headingRef}>Jewelries That Radiates Charm</h2>
//           <p ref={paraRef}>
//             Discover elegant, one-of-a-kind jewelry crafted to elevate your
//             everyday moments and unforgettable occasions.
//           </p>

//           <button>Shop Now</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

