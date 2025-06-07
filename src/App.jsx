// src/App.jsx
import React from 'react';
import ProductDispenser from './components/ProductDispenser.jsx';
import Jumbotron from "./components/Jumbotron.jsx";
import Header from "./components/Header.jsx";
import ContentContainer from "./components/ContentContainer.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <ContentContainer />
        </div>
    );
}

export default App;
