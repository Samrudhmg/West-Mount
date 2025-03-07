"use client";

import { useState, useEffect } from "react";

export default function CustomCarousel() {
    // Set initial active index to show model-1 in the middle
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(1200);

    // Reordered images with model-1 first (to be in the middle)
    // model-2, model-3, model-4 to the left
    // model-5, model-6, model-7 to the right
    const images = [
        "/images/model-1.jpg", // Middle (index 0)
        "/images/model-2.jpg", // Left
        "/images/model-3.jpg", // Left
        "/images/model-4.jpg", // Left
        "/images/model-5.jpg", // Right
        "/images/model-6.jpg", // Right
        "/images/model-7.jpg", // Right
    ];

    // Auto rotate cards - commented out as requested
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial width
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center px-4 max-w-6xl mx-auto">
            {/* Card Carousel */}n
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mb-12 cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                    {images.map((image, index) => {
                        // Calculate position relative to active card
                        const position =
                            (index - activeIndex + images.length) %
                            images.length;

                        // Normalize position to be between -3 and 3
                        const normalizedPosition =
                            position > 3 ? position - images.length : position;

                        // Calculate z-index and transform based on position
                        const zIndex = 10 - Math.abs(normalizedPosition);

                        // Full opacity for all cards
                        const opacity = normalizedPosition === 0 ? 1 : 1;

                        // Get window width for responsive calculations
                        // const isBrowser = typeof window !== 'undefined'
                        // const windowWidth = isBrowser ? window.innerWidth : 1200

                        // Responsive scale and translateX values
                        let scale, translateX, cardWidth, cardHeight;

                        // Responsive adjustments based on screen size
                        if (windowWidth < 640) {
                            // Mobile
                            scale = 1 - Math.abs(normalizedPosition) * 0.15;
                            translateX = normalizedPosition * 30;
                            cardWidth = "200px";
                            cardHeight = "400px";
                        } else if (windowWidth < 768) {
                            // Small tablets
                            scale = 1 - Math.abs(normalizedPosition) * 0.12;
                            translateX = normalizedPosition * 60;
                            cardWidth = "250px";
                            cardHeight = "500px";
                        } else if (windowWidth < 1024) {
                            // Tablets and small laptops
                            scale = 1 - Math.abs(normalizedPosition) * 0.1;
                            translateX = normalizedPosition * 100;
                            cardWidth = "280px";
                            cardHeight = "550px";
                        } else {
                            // Large screens (keep original values)
                            scale = 1 - Math.abs(normalizedPosition) * 0.08;
                            translateX = normalizedPosition * 150;
                            cardWidth = "300px";
                            cardHeight = "600px";
                        }

                        return (
                            <div
                                key={index}
                                className="absolute transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-lg"
                                style={{
                                    zIndex,
                                    opacity,
                                    transform: `translateX(${translateX}px) scale(${scale})`,
                                    width: cardWidth,
                                    height: cardHeight,
                                }}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img
                                    src={image || "/placeholder.svg"}
                                    alt={`Study abroad model ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
