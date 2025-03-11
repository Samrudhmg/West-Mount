"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function UpCommingEvents() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);

    // Sample images - replace with your own
    const images = [
        "/images/events-img1.jpg",
        "/images/events-img1.jpg",
        "/images/events-img1.jpg",
    ];

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Auto slide every 3 seconds
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isOpen) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1,
                );
            }, 3000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isOpen, images.length]);

    return (
        <>
            {/* Trigger button - only show when modal is closed */}
            {!isOpen && (
                <div className="absolute cursor-pointer right-0 bottom-14 bg-[#006969] text-white text-xs sm:text-sm w-[120px] sm:w-[150px] h-[80px] sm:h-[100px] rounded-tl-xl rounded-bl-xl shadow-lg hover:bg-opacity-90 transition-colors z-10 p-2 text-center flex items-center justify-center">
                    <button
                        onClick={openModal}
                        className="flex flex-col items-center justify-center gap-2 cursor-pointer"
                    >
                        <Image
                            src="/icons/events-icon.svg"
                            alt="gift"
                            width={30}
                            height={30}
                        />
                        <span>Upcoming Events</span>
                    </button>
                </div>
            )}

            {/* Modal overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    {/* Modal content */}
                    <div
                        ref={modalRef}
                        className="relative w-[90%] md:w-[60%] h-[45%] md:h-[80%] lg:h-[75%] bg-white rounded-3xl shadow-xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center w-full px-4 py-2 md:px-6 md:py-5 ">
                            <h1 className="text-lg md:text-2xl font-semibold">
                                Upcoming Events from{" "}
                                <span className="text-[#006969]">
                                    Westmount
                                </span>
                            </h1>
                            <button
                                onClick={closeModal}
                                className="cursor-pointer"
                            >
                                <Image
                                    src="/icons/close-icon.svg"
                                    alt="close"
                                    width={30}
                                    height={30}
                                    className="w-5 h-5 md:w-6 md:h-6"
                                />
                            </button>
                        </div>

                        {/* Image container */}
                        <div className="flex flex-col justify-between h-[calc(100%-70px)] md:h-[calc(100%-70px)] py-2 md:py-4">
                            {/* Image */}
                            <div className="flex-1 flex items-center justify-center px-2 md:px-4">
                                <Image
                                    src={
                                        images[currentImageIndex] ||
                                        "/placeholder.svg"
                                    }
                                    alt={`Slide ${currentImageIndex + 1}`}
                                    width={500}
                                    height={500}
                                    className="max-h-full w-auto md:w-[95%] object-contain"
                                />
                            </div>

                            {/* Indicators */}
                            <div className="flex justify-center items-center py-2 md:py-10 lg:py-4">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setCurrentImageIndex(index)
                                        }
                                        className={`w-2 h-2 mx-1 rounded-full ${
                                            index === currentImageIndex
                                                ? "bg-[#006969]"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
