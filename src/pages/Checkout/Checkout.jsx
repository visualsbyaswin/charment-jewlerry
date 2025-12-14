import React, { useContext } from "react";
import Prodisplay from "../../components/Productdisplay/Prodisplay";
import Signature from "../../components/Signaturecollections/Signature";
import Clients from "../../components/Clients/Clients";
import Newsletter from "../../components/Newsletter/NewsLetter";
import { useParams } from "react-router-dom";
import { Allitems } from "../../assets/assets";

const Checkout = () => {
  const { slug } = useParams();

  const product = Allitems.find((Item) => Item.name === slug);

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <>
      <Prodisplay image={product.image} price={product.price} title={product.name}/>
      <Signature />
      <Clients />
      <Newsletter />
    </>
  );
};

export default Checkout;
