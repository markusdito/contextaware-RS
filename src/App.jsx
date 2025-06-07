// src/App.jsx
import React from 'react';
import ProductDispenser from './components/ProductDispenser.jsx';
import Jumbotron from "./components/Jumbotron.jsx";
import Header from "./components/Header.jsx";

function App() {
    return (
        <div className="App max-w-5xl mx-auto">
            <Header />
            <Jumbotron />
            <ProductDispenser />
        </div>
    );
}

export default App;
