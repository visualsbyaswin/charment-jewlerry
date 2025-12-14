import React from "react";
import "./ceodetail.css";
import { assets } from "../../assets/assets";
const CeoDetail = () => {
  return (
    <section className="ceodetail">
      <div className="ceoimage">
        <img src={assets.test1} alt="" />
      </div>
      <div className="ceocontents">
        <div className="ceomp">
          <p>
            "At Charmant, we craft jewelry to be more than an accessory—it’s a
            keepsake of moments, love, and individuality, blending timeless
            craftsmanship with meaningful design."
          </p>
        </div>
        <div className="ceosmall">
            <p>Emily Roberts — CEO CHARMANT</p>
        </div>
      </div>
    </section>
  );
};

export default CeoDetail;
