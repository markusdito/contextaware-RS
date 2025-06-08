import React, {useState} from "react";

const Header = ({setResults}) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = async () => {
        if (!keyword) return;

        try {
            const response = await fetch(`http://127.0.0.1:8000/search?keyword=${encodeURIComponent(keyword)}&top_n=18`);
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <header className="bg-white shadow-md p-4">
            <div className="max-w-5xl mx-auto flex gap-6 items-center">
                <h1 className="w-48 text-2xl font-bold ">Fashion Store</h1>
                <div className="relative w-full">
                    <svg
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.386-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={async (e) => {
                            if (e.key === 'Enter') {
                                await handleSearch();
                            }
                        }}
                        className="pl-14 pr-4 py-2 border-2 h-14 border-gray-300 rounded-full w-full  focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;