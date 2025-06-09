// src/App.jsx
import React, {useState, useEffect} from 'react';
import Header from "./components/Header.jsx";
import ContentContainer from "./components/ContentContainer.jsx";

function App() {
    const [results, setResults] = useState([]);
    const [initialResults, setInitialResults] = useState([]);
    const [category, setCategory] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/search?keyword=&top_n=18`);
                const data = await response.json();
                setResults(data.results);
                setInitialResults(data.results);
            } catch (error) {
                console.error("Error fetching initial products:", error);
            }
        })();
    }, []);


    // When search runs → update both initialResults + results
    const handleSearchResults = (newResults) => {
        setResults(newResults);
        setInitialResults(newResults);
        setCategory(null); // Optional → clear category filter when searching
    };

    return (
        <div className="App">
            <Header setResults={handleSearchResults}/>
            <ContentContainer products={results}
                              category={category}
                              initialProducts={initialResults}
                              setCategory={setCategory}
                              setResults={setResults}
            />
        </div>
    );
}

export default App;
