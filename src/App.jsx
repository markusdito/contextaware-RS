// src/App.jsx
import React, {useState} from 'react';
import Header from "./components/Header.jsx";
import ContentContainer from "./components/ContentContainer.jsx";

function App() {
    const [results, setResults] = useState([]);

    return (
        <div className="App">
            <Header setResults={setResults}/>
            <ContentContainer products={results}/>
        </div>
    );
}

export default App;
