"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// University type definition
type University = {
    name: string;
    location: string;
    logoUrl: string;
};

// Country type definition
type Country = {
    name: string;
    code: string;
    flag: string;
    universities: University[];
};

// Sample data for countries and universities
const countries: Country[] = [
    {
        name: "United Kingdom",
        code: "uk",
        flag: "/icons/united-kingdom.svg",
        universities: [
            {
                name: "Chester University",
                location: "Chester, England",
                logoUrl: "/icons/chester-uni.svg",
            },
            {
                name: "University of Warwick",
                location: "Coventry, England",
                logoUrl: "/icons/Warwick-uni.svg",
            },
            {
                name: "University of Edinburgh",
                location: "Edinburgh, Scotland",
                logoUrl: "/icons/edinburgh-uni.svg",
            },
        ],
    },
    {
        name: "Ireland",
        code: "ie",
        flag: "/icons/ireland-icon.svg",
        universities: [
            {
                name: "National College of Ireland",
                location: "Dublin, Ireland",
                logoUrl: "/icons/national-college-uni.svg",
            },
            {
                name: "University of Limerick",
                location: "Limerick, Ireland",
                logoUrl: "/icons/University-Limerick-uni.svg",
            },
            {
                name: "Dublin Business School",
                location: "Coventry, England",
                logoUrl: "/icons/Dublin-business-uni.svg",
            },
        ],
    },
    {
        name: "Germany",
        code: "de",
        flag: "/icons/germany.svg",
        universities: [
            {
                name: "Technical University of Munich",
                location: "Munich, Germany",
                logoUrl: "/icons/Tech-university-Munich.svg",
            },
            {
                name: "Ludwig Maximilian University of Munich",
                location: "Munich, Germany",
                logoUrl: "/icons/Ludwig-maximilian-uni.svg",
            },
        ],
    },
    {
        name: "Austria",
        code: "at",
        flag: "/icons/austria.svg",
        universities: [
            {
                name: "University of Vienna",
                location: "Vienna, Austria",
                logoUrl: "/icons/Uni-of-Vienna.svg",
            },
            {
                name: "Vienna University of Technology",
                location: "Vienna, Austria",
                logoUrl: "/icons/TU-Signet-uni.svg",
            },
            {
                name: "University of Innsbruck",
                location: "Innsbruck, Austria",
                logoUrl: "/icons/innsbruck-uni.svg",
            },
        ],
    },
    {
        name: "Slovakia",
        code: "sk",
        flag: "/icons/slovakia.svg",
        universities: [
            {
                name: "University of Žilina",
                location: "Žilina, Slovakia",
                logoUrl: "/icons/Zilina-uni.svg",
            },
            {
                name: "Slovak University of Technology",
                location: "Bratislava, Slovakia",
                logoUrl: "/icons/Slovak-uni.svg",
            },
        ],
    },
    {
        name: "Poland",
        code: "pl",
        flag: "/icons/poland.svg",
        universities: [
            {
                name: "Jagiellonian University",
                location: "Kraków, Poland",
                logoUrl: "/icons/Jagiellonian-uni.svg",
            },
            {
                name: "University of Warsaw",
                location: "Warsaw, Poland",
                logoUrl: "/icons/Warsaw-uni.svg",
            },
        ],
    },
    {
        name: "Czech Republic",
        code: "cz",
        flag: "/icons/czech-republic.svg",
        universities: [
            {
                name: "Czech Technical University",
                location: "Prague, Czech Republic",
                logoUrl: "/icons/Czech-Tech-uni.svg",
            },
            {
                name: "Charles University",
                location: "Prague, Czech Republic",
                logoUrl: "/icons/Charles-uni.svg",
            },
        ],
    },
    {
        name: "Slovenia",
        code: "si",
        flag: "/icons/slovenia.svg",
        universities: [
            {
                name: "University of Ljubljana",
                location: "Ljubljana, Slovenia",
                logoUrl: "/icons/Ljubljana-uni.svg",
            },
            {
                name: "University of Maribor",
                location: "Maribor, Slovenia",
                logoUrl: "/icons/Maribor-uni.svg",
            },
        ],
    },
    {
        name: "Lithuania",
        code: "lt",
        flag: "/icons/lithuania.svg",
        universities: [
            {
                name: "Kaunas University of Technology",
                location: "Kaunas, Lithuania",
                logoUrl: "/icons/Kaunas-uni.svg",
            },
            {
                name: "Vilnius University",
                location: "Vilnius, Lithuania",
                logoUrl: "/icons/Vilnius-uni.svg",
            },
        ],
    },
];

export default function PartnerUniversities() {
    const [selectedCountry, setSelectedCountry] = useState("uk");

    return (
        <div className="container max-w-7xl mx-auto py-12 px-4 text-black">
            <div className="text-left mb-8">
                <h2 className="text-4xl font-bold mb-2">
                    Our Top{" "}
                    <span className="text-teal-600">Partner Universities</span>
                </h2>
                <p className="text-gray-600 max-w-4xl text-lg mt-4">
                    We work with some of the best universities in the world to
                    give you the best education options.
                </p>
            </div>

            <Tabs
                defaultValue="uk"
                value={selectedCountry}
                onValueChange={setSelectedCountry}
                className="w-full"
            >
                <TabsList className="flex justify-start gap-x-4 overflow-x-auto mb-8 bg-transparent max-w-7xl mx-auto rounded-none px-4">
                    {countries.map((country) => (
                        <TabsTrigger
                            key={country.code}
                            value={country.code}
                            className={`flex items-center cursor-pointer gap-2 px-4 py-2 text-base transition-all border-b-2 whitespace-nowrap
        ${
            selectedCountry === country.code
                ? "border-b-4 border-teal-600 font-medium text-lg"
                : "border-transparent hover:bg-gray-100"
        }`}
                            style={{
                                minHeight: "40px",
                                borderRadius: "0",
                            }}
                        >
                            <span className="shrink-0">{country.name}</span>
                            <img
                                src={country.flag}
                                alt={`${country.name}'s flag`} // Added accessibility
                                className="w-5 h-5 rounded-full shrink-0"
                            />
                        </TabsTrigger>
                    ))}
                </TabsList>

                {countries.map((country) => (
                    <TabsContent
                        key={country.code}
                        value={country.code}
                        className="mt-0"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {country.universities.map((university, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg border border-gray-200 flex items-center gap-8 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={university.logoUrl}
                                            alt={`${university.name} logo`}
                                            width={80}
                                            height={80}
                                            className="rounded-md object-contain w-20 h-20"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-teal-700">
                                            {university.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            {university.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            <div className="mt-10 ">
                <Button
                    variant="nothing"
                    className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-6 rounded-md"
                >
                    View All Universities
                </Button>
            </div>
        </div>
    );
}
