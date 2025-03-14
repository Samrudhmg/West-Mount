"use client";

import { useState, useEffect } from "react";

export default function CustomCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(1200);

    const images = [
        "/images/model-1.jpg",
        "/images/model-2.jpg",
        "/images/model-3.jpg",
        "/images/model-4.jpg",
        "/images/model-5.jpg",
        "/images/model-6.jpg",
        "/images/model-7.jpg",
    ];

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center px-4 max-w-6xl mx-auto">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mb-12 cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                    {images.map((image, index) => {
                        const position =
                            (index - activeIndex + images.length) %
                            images.length;
                        const normalizedPosition =
                            position > 3 ? position - images.length : position;

                        const zIndex = 10 - Math.abs(normalizedPosition);

                        // Brightness and opacity based on position
                        let brightness = 1;
                        let opacity = 1;

                        if (Math.abs(normalizedPosition) === 1) {
                            brightness = 0.5; // Slightly dark
                            opacity = 1;
                        } else if (Math.abs(normalizedPosition) === 2) {
                            brightness = 0.4; // More dark
                            opacity = 1;
                        } else if (Math.abs(normalizedPosition) > 2) {
                            brightness = 0.3; // Even darker for distant ones
                            opacity = 1;
                        }

                        let scale, translateX, cardWidth, cardHeight;
                        if (windowWidth < 640) {
                            scale = 1 - Math.abs(normalizedPosition) * 0.15;
                            translateX = normalizedPosition * 30;
                            cardWidth = "200px";
                            cardHeight = "400px";
                        } else if (windowWidth < 768) {
                            scale = 1 - Math.abs(normalizedPosition) * 0.12;
                            translateX = normalizedPosition * 60;
                            cardWidth = "250px";
                            cardHeight = "500px";
                        } else if (windowWidth < 1024) {
                            scale = 1 - Math.abs(normalizedPosition) * 0.1;
                            translateX = normalizedPosition * 100;
                            cardWidth = "280px";
                            cardHeight = "550px";
                        } else {
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
                                    filter: `brightness(${brightness})`,
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
