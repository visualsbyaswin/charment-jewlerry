import React from "react";
import "./signature.css";
import { Signaturecollection } from "../../assets/assets";
import { Link } from "react-router-dom";

const Signature = () => {
  return (
    <section className="signature">
      <div className="signature-texts">
        <div className="signh1">
          <p>our signature collections</p>
        </div>
        <div className="signp">
          <p>
            Whether you seek elegant simplicity for everyday wear or striking
            designs for life's grand occasions, our collections are crafted to
            shine with you.
          </p>
        </div>
      </div>

      <div className="signature-products">
        {Signaturecollection.map((item, i) => (
          <div className="signpro" key={item.id || i}>
            <Link
              to={item.link}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={item.image} alt={item.name} />
            </Link>

            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Signature;
