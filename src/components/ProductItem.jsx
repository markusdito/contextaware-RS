import React from "react";

const ProductItem = (product) => {
    return (
        <div
            key={product.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white"
        >
            <img
                src={product.link}
                alt={product.productDisplayName}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="font-bold text-lg mb-2 truncate">{product.productDisplayName}</h2>
                <p className="text-sm text-gray-600 mb-1">{product.masterCategory} / {product.articleType}</p>
                <p className="text-sm text-gray-500">{product.baseColour} • {product.season} {product.year}</p>
            </div>
        </div>
    )
}

export default ProductItem;