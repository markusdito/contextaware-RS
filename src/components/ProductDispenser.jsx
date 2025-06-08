// src/components/ProductDispenser.jsx
import React from 'react';
import ProductItem from "./ProductItem.jsx";
const ProductDispenser = ({products}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 pt-6">
            {products.map((product) => (
                ProductItem(product)
            ))}
        </div>
    );
};

export default ProductDispenser;
