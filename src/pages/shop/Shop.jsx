import React from "react";
import "./shop.css";
import { Allitems } from "../../assets/assets";
import Item from "../../components/Item/Item";
import Clients from "../../components/Clients/Clients";
import Newsletter from "../../components/Newsletter/NewsLetter";
import Signature from "../../components/Signaturecollections/Signature";
const Shop = () => {
  return (
<>
    <section className="shopcollection">
      <div className="shopheading">
        <div className="shoph1head">
          <h1>All Items</h1>
        </div>
      </div>
      <div className="shopsetimages">
        {Allitems.map((items, i) => {
          return (
            <Item
              key={i}
              id={items.id}
              image={items.image}
              price={items.price}
              name={items.name}
            />
          );
        })}
      </div>
    </section>
    <Signature/>
    <Clients/>
    <Newsletter/>
</>
  );
};

export default Shop;
