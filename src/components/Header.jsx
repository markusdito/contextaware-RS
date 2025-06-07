import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Fashion Store</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Products</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">About</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;