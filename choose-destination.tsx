"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplyDialogForm } from "./apply-dialog-form";

export default function DestinationSelector() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTablet, setIsTablet] = useState(
        typeof window !== "undefined" && window.innerWidth < 1024,
    );

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
                    "Ireland boasts a vibrant education system, known for its high standards and diverse opportunities, all set against the backdrop of Ireland's stunning landscapes.",
            },
            {
                id: 2,
                name: "United Kingdom",
                flag: "/icons/united-kingdom.svg",
                image: "/images/united-kingdom-desti.jpg",
                description:
                    "Education in the United Kingdom is renowned for its high standards and diverse opportunities, offering a wide range of programs.",
            },
            {
                id: 3,
                name: "Austria",
                flag: "/icons/austria.svg",
                image: "/images/austria-desti.jpg",
                description:
                    "Austria boasts a robust education system known for its high standards and diverse offerings. The country is home to some of the oldest universities in the world",
            },
            {
                id: 4,
                name: "Germany",
                flag: "/icons/germany.svg",
                image: "/images/ireland-desti.jpg",
                description:
                    "Germany offers tuition-free education at many public universities and is known for its excellence in engineering, science, and research opportunities.",
            },
            {
                id: 5,
                name: "France",
                flag: "/icons/france.svg",
                image: "/images/united-kingdom-desti.jpg",
                description:
                    "France combines rich cultural heritage with prestigious educational institutions, offering diverse programs in arts, sciences, and business.",
            },
            {
                id: 6,
                name: "Spain",
                flag: "/icons/spain.svg",
                image: "/images/austria-desti.jpg",
                description:
                    "Spain provides a vibrant educational experience with historic universities, affordable tuition, and a welcoming atmosphere for international students.",
            },
        ],
        [],
    );

    const displayedCountries = useMemo(
        () => countries.slice(currentIndex, currentIndex + itemsPerPage),
        [currentIndex, itemsPerPage, countries],
    );

    const handleNext = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + itemsPerPage) % countries.length,
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="md:text-center mb-10">
                <h1 className="text-4xl font-bold mb-1 text-black">
                    Choose your Favourite{" "}
                    <span className=" text-teal-700">
                        <br /> Destination
                    </span>
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto mt-2 text-lg">
                    Select your preferred destination. We have university
                    partners in more than 32 countries.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 justify-center items-center">
                {displayedCountries.map((country) => (
                    <div
                        key={country.id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg  max-w-[350px] mx-auto flex flex-col items-center"
                    >
                        <div className="relative h-52 w-full">
                            <Image
                                src={country.image || "/placeholder.svg"}
                                alt="img"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                <div className="w-14 h-14 rounded-full   overflow-hidden bg-white flex items-center justify-center">
                                    <Image
                                        src={country.flag || "/placeholder.svg"}
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
                            <ApplyDialogForm>
                                <Button
                                    variant="default"
                                    className=" text-white px-4 py-3 rounded-md text-xs hover:bg-teal-700 transition-colors"
                                >
                                    Learn more
                                </Button>
                            </ApplyDialogForm>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Button
                    onClick={handleNext}
                    className="w-14 h-14 rounded-full cursor-pointer bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition-colors"
                >
                    <ChevronRight className="text-teal-700 w-6 h-6" />
                </Button>
            </div>
        </div>
    );
}
