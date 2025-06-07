import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import ProductDispenser from "./ProductDispenser.jsx";

const ContentContainer = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Jumbotron/>
            <ul className="flex gap-5">
                <li><button className="text-2xl">Women</button></li>
                <li><button className="text-2xl">Men</button></li>
                <li><button className="text-2xl">Boy</button></li>
                <li><button className="text-2xl">Girl</button></li>
            </ul>
            <ProductDispenser/>
        </div>
    )
}

export default ContentContainer;