import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import products from "../../data.js";

const ProductListing = () => {
  return (
    <>
      <div className="container">
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            padding: "20px",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
