import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import ProductDispenser from "./ProductDispenser.jsx";

const ContentContainer = ({products}) => {
    return (
        <div className="max-w-5xl mx-auto">
            <Jumbotron/>
            <ul className="flex gap-5">
                <li><button className="text-2xl hover:text-blue-500">Women</button></li>
                <li><button className="text-2xl hover:text-blue-500">Men</button></li>
                <li><button className="text-2xl hover:text-blue-500">Boy</button></li>
                <li><button className="text-2xl hover:text-blue-500">Girl</button></li>
            </ul>
            <ProductDispenser products={products} />
        </div>
    )
}

export default ContentContainer;