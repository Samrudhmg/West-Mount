"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

// Define our country data
const countries = [
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
        flag: "/germany-flag.svg",
        image: "/placeholder.svg?height=600&width=800",
        description:
            "Germany offers tuition-free education at many public universities and is known for its excellence in engineering, science, and research opportunities.",
    },
    {
        id: 5,
        name: "France",
        flag: "/france-flag.svg",
        image: "/placeholder.svg?height=600&width=800",
        description:
            "France combines rich cultural heritage with prestigious educational institutions, offering diverse programs in arts, sciences, and business.",
    },
    {
        id: 6,
        name: "Spain",
        flag: "/spain-flag.svg",
        image: "/placeholder.svg?height=600&width=800",
        description:
            "Spain provides a vibrant educational experience with historic universities, affordable tuition, and a welcoming atmosphere for international students.",
    },
];

export default function DestinationSelector() {
    const [showSecondSet, setShowSecondSet] = useState(false);

    const toggleCountries = () => {
        setShowSecondSet(!showSecondSet);
    };

    // Get the current set of countries to display
    const displayedCountries = showSecondSet
        ? countries.slice(3, 6)
        : countries.slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className=" md:text-center mb-10">
                {" "}
                {/* Reduced bottom margin */}
                <h1 className="text-4xl font-bold mb-1 text-black">
                    Choose your Favourite{" "}
                    <span className="text-teal-600">
                        <br />
                        Destination
                    </span>
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto mt-2 text-lg">
                    Select your preferred destination. We have university
                    partners in more than 32 countries.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 justify-center items-center ">
                {" "}
                {/* Reduced grid gap */}
                {displayedCountries.map((country) => (
                    <div
                        key={country.id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg max-w-[320px] mx-auto flex flex-col items-center"
                    >
                        <div className="relative h-44 w-full">
                            {" "}
                            {/* Reduced image height */}
                            <Image
                                src={country.image || "/placeholder.svg"}
                                alt={`${country.name} landscape`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
                                    <Image
                                        src={country.flag || "/placeholder.svg"}
                                        alt={`${country.name} flag`}
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center pt-6 pb-4 px-4 h-[230px] gap-2 mt-4">
                            {" "}
                            {/* Fixed height */}
                            <h3 className="text-lg font-semibold text-teal-600 mb-1">
                                {country.name}
                            </h3>
                            <p className="text-gray-600 text-[13px] text-center mb-2">
                                {country.description}
                            </p>
                            <Button className="bg-teal-600 text-white px-4  py-3 rounded-md text-xs hover:bg-teal-700 transition-colors">
                                Learn more
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                {" "}
                {/* Reduced spacing */}
                <Button
                    onClick={toggleCountries}
                    className="w-14 h-14 rounded-full bg-teal-200 flex items-center justify-center hover:bg-teal-300 transition-colors"
                >
                    <ChevronRight className="text-teal-600 w-5 h-5" />
                </Button>
            </div>
        </div>
    );
}
