import React from "react";
import "./prodisplay.css";
import { Allitems, assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
const Prodisplay = ({title,price,image}) => {

  return (
    <section className="Prodisplay">
      <div className="allset">
        <div className="prodetailsection">
          <div className="brudcrumbs"></div>
          <div className="pdheading">
            <h1>{title}</h1>
          </div>
          <div className="pdprice">
            <div className="fp">
              <p>${price}</p>
            </div>
            <div className="sp">
              <p>44 in stock </p>
            </div>
          </div>
          <div className="quantity">
            <div className="increse">
              <h1>+</h1>
            </div>
            <div className="display">
              <input type="number" value="8" />
            </div>
            <div className="decrese">
              <h1>-</h1>
            </div>
          </div>
          <div className="addtocart">
            <div className="addto">
              <button>Add To Cart</button>
            </div>
            <div className="buynow">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="productimagesection">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="mpolicy">
        <div className="productpolicy">
          <div className="clickablechanger">
            <p>Description</p>
          </div>
          <div className="clickablechanger">
            <p>Delivery</p>
          </div>
          <div className="clickablechanger">
            <p>Return</p>
          </div>
        </div>
        <div className="prodescription">
            <p>A timeless link bracelet that seamlessly blends classic sophistication with a touch of sentimental elegance. The bracelet features intricately designed links, each polished to perfection, creating a refined foundation for the centerpiece: a single, delicate heart-shaped charm. This charm, a symbol of love and connection, adds a meaningful accent to the piece, making it an ideal accessory for both everyday wear and cherished occasions. Whether worn alone or layered, this bracelet is a celebration of grace and understated beauty.</p>
        </div>
      </div>
    </section>
  );
};

export default Prodisplay;
