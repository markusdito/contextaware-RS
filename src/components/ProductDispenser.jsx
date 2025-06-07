// src/components/ProductDispenser.jsx
import React, { useEffect, useState } from 'react';
import ProductItem from "./ProductItem.jsx";
const ProductDispenser = () => {
    const [products, setProducts] = useState([]);
    const rows = 10; // Number of rows to display
    const totalProducts = 6 * rows; // 6 products per row

    useEffect(() => {
        fetch('/cleaned_fashion.json')
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, totalProducts))); // first 20 items
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 pt-6">
            {products.map((product) => (
                ProductItem(product)
            ))}
        </div>
    );
};

export default ProductDispenser;
