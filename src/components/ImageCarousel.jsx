import { useState, useEffect, useRef } from "react";
import launch from "./../assets/launch.jpg";
import RSDII from "./../assets/RSDII.png";
import innovate from "./../assets/innovate.png";

const images = [
    { src: launch, caption: " The launch" },
    { src: RSDII, caption: "The RSDII team" },
    { src: innovate, caption: "research=innovation" },
];

export const ImageCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    const next = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    // Autoplay with pause on hover
    useEffect(() => {
        if (!isHovered) {
            intervalRef.current = setInterval(() => {
                next();
            }, 5000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <section
            id="carousel"
            className="py-16 bg-gray-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="max-w-4xl mx-auto px-4 relative">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                    Event Highlights
                </h2>

                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md relative">
                    <img
                        src={images[current].src}
                        alt={`Slide ${current + 1}`}
                        className="w-full h-96 object-cover transition-all duration-700"
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded text-center">
                        {images[current].caption}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-black px-3 py-1 rounded-full shadow hover:bg-yellow-100"
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-black px-3 py-1 rounded-full shadow hover:bg-yellow-100"
                >
                    ›
                </button>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${current === index
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                                } hover:bg-yellow-400 transition`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
