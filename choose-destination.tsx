"use client";

import type React from "react";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplyDialogForm } from "./apply-dialog-form";

export default function DestinationSelector() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTablet, setIsTablet] = useState(
        typeof window !== "undefined" && window.innerWidth < 1024,
    );
    const carouselRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const updateScreenSize = () => {
            const tabletMode = window.innerWidth < 1024;
            setIsTablet((prev) => {
                if (prev !== tabletMode) setCurrentIndex(0); // Reset index when mode changes
                return tabletMode;
            });
        };

        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    const itemsPerPage = isTablet ? 2 : 3;

    const countries = useMemo(
        () => [
            {
                id: 1,
                name: "Ireland",
                flag: "/icons/Ireland-icon.svg",
                image: "/images/ireland-desti.jpg",
                description:
                    "Ireland features a dynamic education system recognized for its exceptional quality and a wide range of opportunities, all framed by the country's breathtaking scenery.",
            },
            {
                id: 2,
                name: "United Kingdom",
                flag: "/icons/united-kingdom.svg",
                image: "/images/united-kingdom-desti.jpg",
                description:
                    "Education in the United Kingdom is distinguished by its outstanding quality and variety of options, providing an extensive lineup of programs.",
            },
            {
                id: 3,
                name: "Austria",
                flag: "/icons/austria.svg",
                image: "/images/austria-desti.jpg",
                description:
                    "Austria has a strong education system, high standards, and diverse programs. The country hosts some of the oldest universities in the world.",
            },
            {
                id: 4,
                name: "Slovakia",
                flag: "/icons/germany.svg",
                image: "/images/ireland-desti.jpg",
                description:
                    "Slovakia offers vibrant traditions, stunning landscapes, student-friendly education, quality medicine and engineering programs, a welcoming atmosphere, and a central European location.",
            },
            {
                id: 5,
                name: "Germany",
                flag: "/icons/france.svg",
                image: "/images/united-kingdom-desti.jpg",
                description:
                    "Germany offers historic landmarks, innovation, world-class engineering and technology education, affordable tuition, diversity, a strong economy, and excellent career opportunities.",
            },
            {
                id: 6,
                name: "Poland",
                flag: "/icons/spain.svg",
                image: "/images/austria-desti.jpg",
                description:
                    "Poland offers a rich heritage, flourishing culture, quality education, diverse programs, lively cities, a central location, and a growing job market.",
            },
            {
                id: 7,
                name: "Czech Republic",
                flag: "/icons/germany.svg",
                image: "/images/ireland-desti.jpg",
                description:
                    "The Czech Republic offers a fascinating history, stunning architecture, vibrant culture, budget-friendly education, wide-ranging programs, and a central location for academic and cultural exploration.",
            },
            {
                id: 8,
                name: "Slovenia",
                flag: "/icons/france.svg",
                image: "/images/united-kingdom-desti.jpg",
                description:
                    "Slovenia boasts a vibrant legacy, scenic landscapes, excellent academics, wide-ranging programs, and a central location, offering a perfect mix of learning, adventure, and culture.",
            },
            {
                id: 9,
                name: "Lithuania",
                flag: "/icons/spain.svg",
                image: "/images/austria-desti.jpg",
                description:
                    "Lithuania offers a dynamic mix of history, culture, and modern life, with accessible learning, varied courses, and great opportunities for travel and growth.",
            },
        ],
        [],
    );

    // Calculate the maximum index where the last card is visible
    const maxIndex = countries.length - itemsPerPage;

    const handleNext = () => {
        if (isAnimating || currentIndex >= maxIndex) return;

        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
            // Move just one card at a time, but don't exceed maxIndex
            return Math.min(prevIndex + 1, maxIndex);
        });

        setTimeout(() => setIsAnimating(false), 500); // Match this with the CSS transition duration
    };

    const handlePrev = () => {
        if (isAnimating || currentIndex <= 0) return;

        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
            // Move just one card at a time, but don't go below 0
            return Math.max(prevIndex - 1, 0);
        });

        setTimeout(() => setIsAnimating(false), 500); // Match this with the CSS transition duration
    };

    // Mouse/Touch drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;

        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(currentIndex);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!carouselRef.current) return;

        setIsDragging(true);
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
        setScrollLeft(currentIndex);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;

        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk =
            (x - startX) / (carouselRef.current.clientWidth / itemsPerPage);

        // Calculate new index but clamp it between 0 and maxIndex
        const rawIndex = scrollLeft - walk;
        const newIndex = Math.max(0, Math.min(rawIndex, maxIndex));

        // Update the transform directly for smoother dragging
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${newIndex * (100 / itemsPerPage)}%)`;
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !carouselRef.current) return;

        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk =
            (x - startX) / (carouselRef.current.clientWidth / itemsPerPage);

        // Calculate new index but clamp it between 0 and maxIndex
        const rawIndex = scrollLeft - walk;
        const newIndex = Math.max(0, Math.min(rawIndex, maxIndex));

        // Update the transform directly for smoother dragging
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${newIndex * (100 / itemsPerPage)}%)`;
        }
    };

    const handleMouseUp = () => {
        if (!isDragging || !carouselRef.current) return;

        setIsDragging(false);

        // Calculate the closest index based on current position
        const currentTransform = carouselRef.current.style.transform;
        const currentTranslateX = Number.parseFloat(
            currentTransform.replace("translateX(", "").replace("%)", ""),
        );
        const newIndex = Math.round(-currentTranslateX / (100 / itemsPerPage));

        // Snap to the closest index, but clamp between 0 and maxIndex
        setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleMouseUp();
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16  bg-transparent  ">
            <div className="md:text-center mb-10">
                <h1 className="text-4xl font-bold mb-1 text-black">
                    Choose your Favourite{" "}
                    <span className=" text-teal-700">
                        <br /> Destination
                    </span>
                </h1>
                <p className="text-gray-600 max-w-4xl mx-auto mt-2 text-lg">
                    You can choose your preferred destination — we have
                    university partners in over 32+ countries.
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative overflow-hidden cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
            >
                <div
                    ref={carouselRef}
                    className={`flex transition-transform duration-500 ease-in-out ${isDragging ? "transition-none" : ""}`}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                    }}
                >
                    {countries.map((country) => (
                        <div
                            key={country.id}
                            className="px-3 flex-shrink-0"
                            style={{ width: `${100 / itemsPerPage}%` }}
                        >
                            <div className="bg-white rounded-lg mb-2 overflow-hidden shadow-[0px_4px_10px_rgba(0,0,0,0.1)] w-full max-w-[350px] mx-auto flex flex-col items-center">
                                <div className="relative h-52 w-full">
                                    <Image
                                        src={
                                            country.image || "/placeholder.svg"
                                        }
                                        alt="img"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                        <div className="w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center">
                                            <Image
                                                src={
                                                    country.flag ||
                                                    "/placeholder.svg"
                                                }
                                                alt="img"
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-around pt-6 pb-4 px-4 h-[200px] gap-2 mt-4">
                                    <h3 className="text-lg font-semibold text-teal-600">
                                        {country.name}
                                    </h3>
                                    <p className="text-gray-600 text-[13px] text-center">
                                        {country.description}
                                    </p>
                                    <div className="flex items-center justify-center gap-3">
                                        <ApplyDialogForm>
                                            <Button
                                                variant="default"
                                                className="text-white px-4 py-3 rounded-lg text-xs hover:bg-teal-700 transition-colors"
                                            >
                                                Learn more
                                            </Button>
                                        </ApplyDialogForm>
                                        <a href="tel:+919072123477">
                                            <Button
                                                variant="default"
                                                className="text-white py-3 flex rounded-lg items-center gap-2"
                                            >
                                                Call Us
                                                <Image
                                                    src="/icons/call-fill.svg"
                                                    alt="Call"
                                                    className="size-4"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center  gap-4 mt-4">
                <Button
                    onClick={handlePrev}
                    className="w-14 h-14 rounded-full cursor-pointer bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition-colors"
                    disabled={isAnimating || currentIndex <= 0}
                >
                    <ChevronLeft className="text-teal-700 w-6 h-6" />
                </Button>
                <Button
                    onClick={handleNext}
                    className="w-14 h-14 rounded-full cursor-pointer bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition-colors"
                    disabled={isAnimating || currentIndex >= maxIndex}
                >
                    <ChevronRight className="text-teal-700 w-6 h-6" />
                </Button>
            </div>
        </div>
    );
}
