import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4">
            <div className="max-w-5xl mx-auto flex gap-6 items-center">
                <h1 className="text-2xl font-bold">Fashion Store</h1>
                <button className="w-full h-12 bg-gray-200 rounded-[15px]"></button>
            </div>
        </header>
    );
}

export default Header;