import React, {useEffect} from "react";
import Jumbotron from "./Jumbotron.jsx";
import ProductDispenser from "./ProductDispenser.jsx";

const ContentContainer = ({initialProducts, products, category, setCategory, setResults}) => {
    const filteredProducts = category ? initialProducts.filter(product => product['gender'] === category) : initialProducts;

    useEffect(() => {
        setResults(filteredProducts);
    }, [category, products]);

    return (
        <div className="max-w-5xl mx-auto">
            <Jumbotron/>
            <ul className="flex gap-5">
                <li>
                    <button onClick={() => setCategory('Women')}
                            className="text-2xl hover:text-blue-500"
                    >Women
                    </button>
                </li>
                <li>
                    <button onClick={() => setCategory('Men')}
                            className="text-2xl hover:text-blue-500">Men
                    </button>
                </li>
                <li>
                    <button onClick={() => setCategory('Boys')}
                            className="text-2xl hover:text-blue-500">Boys
                    </button>
                </li>
                <li>
                    <button onClick={() => setCategory('Girls')}
                            className="text-2xl hover:text-blue-500">Girls
                    </button>
                </li>
            </ul>
            <ProductDispenser products={filteredProducts}/>
        </div>
    )
}

export default ContentContainer;