import React, { useState, useEffect } from "react";

const Jumbotron = () => {
    const imageLinks = [
        "http://assets.myntassets.com/v1/images/style/properties/072af0cd079f20296c72f3594a21f141_images.jpg",
        "http://assets.myntassets.com/v1/images/style/properties/b56e261f9206aa95e42c43f4e62d0e5a_images.jpg",
        "http://assets.myntassets.com/v1/images/style/properties/Peter-England-Men-Formal-Black-Beltbc472bd919c505690ecbc1eed8af7fbf_images.jpg",
        "http://assets.myntassets.com/v1/images/style/properties/fee54b57fcd02b7c07d42b0918025099_images.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imageLinks.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [imageLinks.length]);

    return (
        <div className="max-w-4xl mx-auto h-80 rounded-[15px] my-14 overflow-hidden shadow-lg relative p-3 bg-gray-50">
            <img
                src={imageLinks[currentIndex]}
                alt="Jumbotron Poster"
                className="w-full h-full object-cover rounded-[15px] transition-opacity duration-700"
            />
        </div>
    );
};

export default Jumbotron;