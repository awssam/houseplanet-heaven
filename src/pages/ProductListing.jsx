import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import products from '../data.js';

const ProductListing = ({ navigate }) => {
  return (
    <>
    <div>
      <div className="product-listing">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductListing;
