// src/App.jsx
import React from 'react';
import ProductDispenser from './components/ProductDispenser.jsx';
import Jumbotron from "./components/Jumbotron.jsx";

function App() {
    return (
        <div className="App max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-center my-6">Fashion Product Gallery</h1>
            <Jumbotron />
            <ProductDispenser />
        </div>
    );
}

export default App;
