"use client";

import { useState, useEffect } from "react";
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
                name: "Warwick University",
                location: "Chester, England",
                logoUrl: "/icons/Warwick-uni.svg",
            },
            {
                name: "University of Chester",
                location: "Coventry, England",
                logoUrl: "/icons/chester-uni.svg",
            },
            {
                name: "University of Edinburgh",
                location: "Coventry, England",
                logoUrl: "/icons/Edinburgh-uni.svg",
            },
            {
                name: "University of West of Scotland",
                location: "Blantyre, Glasgow ",
                logoUrl: "/icons/uni-scotland.svg",
            },
            {
                name: "Ulster University",
                location: "York, Belfast",
                logoUrl: "/icons/ulster-uni.svg",
            },
            {
                name: "Coventry University",
                location: "Priory, Coventry",
                logoUrl: "/icons/coventry-uni.svg",
            },
            {
                name: "Portsmouth University",
                location: "Southsea, Portsmouth ",
                logoUrl: "/icons/portsmouth-uni.svg",
            },
            {
                name: "Middlesex University",
                location: "Burroughs, London ",
                logoUrl: "/icons/middlesex-uni.svg",
            },
            {
                name: "Queens University of Belfast",
                location: "Norwich, Belfast ",
                logoUrl: "/icons/queens-uni.svg",
            },
            {
                name: "Imperial College London",
                location: "South Kensington, London",
                logoUrl: "/icons/imperial-uni.svg",
            },
            {
                name: "University of East Anglia",
                location: "Research Park, Norwich",
                logoUrl: "/icons/east-anglia-uni.svg",
            },
            {
                name: "University of Kent",
                location: "Giles Ln, Canterbury",
                logoUrl: "/icons/kent-uni.svg",
            },
            {
                name: "Brunnel University of London",
                location: "Kingston, Uxbridge",
                logoUrl: "/icons/brunnel-uni.svg",
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
                location: "Dublin, Ireland",
                logoUrl: "/icons/University-Limerick-uni.svg",
            },
            {
                name: "Dublin Business School",
                location: "Dublin, Ireland",
                logoUrl: "/icons/Dublin-business-uni.svg",
            },
            {
                name: "University of Galway",
                location: "Galway, Ireland",
                logoUrl: "/icons/galway-uni.svg",
            },
            {
                name: "Trinity College Dublin",
                location: "Dublin 2, Ireland",
                logoUrl: "/icons/trinity-dublin-uni.svg",
            },
            {
                name: "Maynooth University",
                location: "Co.Kildare, Ireland",
                logoUrl: "/icons/maynooth-uni.svg",
            },
            {
                name: "Dublin City University",
                location: "Dublin 9, Ireland",
                logoUrl: "/icons/dublin-city-uni.svg",
            },
            {
                name: "University College Cork",
                location: "Cork, Ireland",
                logoUrl: "/icons/dublin-col-cork.svg",
            },
            {
                name: "Atlantic Technological University",
                location: "Co.Donegal, Ireland",
                logoUrl: "/icons/atlantic-tech-uni.svg",
            },
            {
                name: "Griffith College Dublin",
                location: "Dublin 8, Ireland",
                logoUrl: "/icons/griffith-uni.svg",
            },
            {
                name: "South East Technological University",
                location: "Waterford, Ireland",
                logoUrl: "/icons/south-east-tech.svg",
            },
            {
                name: "University College Dublin",
                location: "Dublin 4, Ireland",
                logoUrl: "/icons/uni-col-dublin.svg",
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
                name: "Ludwig Maximilian university of Munich",
                location: "Munich, Germany",
                logoUrl: "/icons/Ludwig-maximilian-uni.svg",
            },
            {
                name: "RWTH Aachen University",
                location: "Aachen, Germany",
                logoUrl: "/icons/RWTH-uni.svg",
            },
            {
                name: "University of Hamburg",
                location: "Hamburg, Germany",
                logoUrl: "/icons/uni-hamburg.svg",
            },
            {
                name: "Heidelberg University",
                location: "Heidelberg, Germany",
                logoUrl: "/icons/heidelberg-uni.svg",
            },
            {
                name: "Technical University Berlin",
                location: "Berlin, Germany",
                logoUrl: "/icons/tech-uni-berlin.svg",
            },
            {
                name: "University of Gottingen",
                location: "Göttingen, Germany",
                logoUrl: "/icons/tech-uni-berlin.svg",
            },
            {
                name: "University of Stuttgart",
                location: "Stuttgart, Germany",
                logoUrl: "/icons/stuttgart-uni.svg",
            },
            {
                name: "University of Potsdam",
                location: "Potsdam, Germany",
                logoUrl: "/icons/potsdam-uni.svg",
            },
            {
                name: "Goethe University Frankfurt",
                location: "Frankfurt, Germany",
                logoUrl: "/icons/frankfurt-uni.svg",
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
                location: "Salzburg, Austria",
                logoUrl: "/icons/Uni-of-Vienna.svg",
            },
            {
                name: "Vienna University of Technology",
                location: "Salzburg, Austria",
                logoUrl: "/icons/TU-Signet-uni.svg",
            },
            {
                name: " University of Innsbruck",
                location: "Salzburg, Austria",
                logoUrl: "/icons/salzburg-uni.svg",
            },
            {
                name: "University of Graz",
                location: "Graz, Austria",
                logoUrl: "/icons/graz-uni.svg",
            },
            {
                name: "Graz University of Technology ",
                location: "Graz, Austria",
                logoUrl: "/icons/graz-uni-tech.svg",
            },
            {
                name: "University of Salzburg",
                location: "Salzburg, Austria",
                logoUrl: "/icons/salzburg-uni.svg",
            },
            {
                name: "Johannes Kepler University Linz",
                location: "Linz, Austria",
                logoUrl: "/icons/kelper-uni.svg",
            },
            {
                name: "Vienna University of Economics and Business",
                location: "Salzburg, Austria",
                logoUrl: "/icons/vienna-eco-uni.svg",
            },
            {
                name: "University of Applied Arts Vienna",
                location: "Wien, Austria",
                logoUrl: "/icons/vienna-arts-uni.svg",
            },
            {
                name: "Medical University of Vienna",
                location: "Wien, Austria",
                logoUrl: "/icons/medical-vienna-uni.svg",
            },
        ],
    },
    {
        name: "Slovakia",
        code: "sk",
        flag: "/icons/slovakia.svg",
        universities: [
            {
                name: "University of Zilina",
                location: "Banská Bystrica, Slovakia",
                logoUrl: "/icons/Zilina-uni.svg",
            },
            {
                name: "Slovak University of Technology",
                location: "Bratislava, Slovakia",
                logoUrl: "/icons/Slovak-uni.svg",
            },
            {
                name: "Comenius University Bratislava",
                location: "Petržalka, Slovakia",
                logoUrl: "/icons/comenius-uni.svg",
            },
            {
                name: "Technical University of Kosice",
                location: "Košice, Slovakia",
                logoUrl: "/icons/kosice-uni.svg",
            },
            {
                name: "Pavol Jozef Šafárik University",
                location: "Košice, Slovakia",
                logoUrl: "/icons/pavol-uni.svg",
            },
            {
                name: "Technical University in Zvolen",
                location: "Zvolen, Slovakia",
                logoUrl: "/icons/zvolen-uni.svg",
            },
            {
                name: "University of Economics in Bratislava",
                location: "Bratislava, Slovakia",
                logoUrl: "/icons/bratislava-uni.svg",
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
            {
                name: "Warsaw University of Technology",
                location: "Warszawa, Poland",
                logoUrl: "/icons/warsaw-tech-uni.svg",
            },
            {
                name: "University of Wrocław",
                location: "Wrocław, Poland",
                logoUrl: "/icons/wroclaw-uni.svg",
            },
            {
                name: "Wrocław University of Science and Technology",
                location: "Warsaw, Poland",
                logoUrl: "/icons/wroclaw-science-uni.svg",
            },
            {
                name: "Gdańsk University of Technology ",
                location: "Wrocław, Poland",
                logoUrl: "/icons/gdansk-uni.svg",
            },
            {
                name: "Adam Mickiewicz University",
                location: "Gdańsk, Poland",
                logoUrl: "/icons/adam-uni.svg",
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
                name: "Charles University ",
                location: "Prague, Czech Republic",
                logoUrl: "/icons/Charles-uni.svg",
            },
            {
                name: "Czech University of Life Sciences Prague (CZU)",
                location: "Praha-Suchdol,Czechia",
                logoUrl: "/icons/czech-life-uni.svg",
            },
            {
                name: "Brno University of Technology ",
                location: "Brno-střed,Czechia",
                logoUrl: "/icons/brno-uni.svg",
            },
            {
                name: "Masaryk University",
                location: "Brno,Czechia",
                logoUrl: "/icons/masaryk-uni.svg",
            },
            {
                name: "University of Ostrava",
                location: "Moravská,Czechia",
                logoUrl: "/icons/ostrava-uni.svg",
            },
            {
                name: "Prague University of Economics and Business",
                location: "Praha 3-Žižkov,Czechia",
                logoUrl: "/icons/prague-uni.svg",
            },
            {
                name: "University of Hradec Králové",
                location: "Hradec Králové 3,Czechia",
                logoUrl: "/icons/hradec-uni.svg",
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
            {
                name: "University of Nova Gorica",
                location: "Nova Gorica, Slovenia",
                logoUrl: "/icons/nova-uni.svg",
            },
            {
                name: "Alma Mater Europaea University ",
                location: "Maribor, Slovenia",
                logoUrl: "/icons/alma-uni.svg",
            },
            {
                name: "University of Primorska",
                location: "Koper, Slovenia",
                logoUrl: "/icons/primorska-uni.svg",
            },
            {
                name: "DOBA Business School",
                location: "Maribor, Slovenia",
                logoUrl: "/icons/DOBA-uni.svg",
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
            {
                name: "Lithuanian University of Health Sciences",
                location: "Kauno, Lithuania",
                logoUrl: "/icons/lithuanian-uni.svg",
            },
            {
                name: "Klaipeda University",
                location: "Klaipėdos, Lithuania",
                logoUrl: "/icons/klaipeda-uni.svg",
            },
            {
                name: "Lithuanian Sports University",
                location: "Kauno, Lithuania",
                logoUrl: "/icons/lithuanian-sports-uni.svg",
            },
            {
                name: "Mykolas Romeris University",
                location: "Vilniaus, Lithuania",
                logoUrl: "/icons/mykolas-uni.svg",
            },
        ],
    },
];

export default function PartnerUniversities() {
    const [selectedCountry, setSelectedCountry] = useState("uk");
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        setShowAll(false);
    }, [selectedCountry]);

    return (
        <div className="container max-w-7xl mx-auto py-14 px-4 text-black">
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
                                src={country.flag || "/placeholder.svg"}
                                alt={`${country.name}'s flag`}
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
                            {country.universities
                                .slice(
                                    0,
                                    showAll ? country.universities.length : 3,
                                )
                                .map((university, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg border border-gray-200 flex items-center gap-8 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={
                                                    university.logoUrl ||
                                                    "/placeholder.svg"
                                                }
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

                        {country.universities.length > 3 && (
                            <div className="mt-8 flex justify-center">
                                <Button
                                    variant="default"
                                    className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-6 rounded-md"
                                    onClick={() => setShowAll(!showAll)}
                                >
                                    {showAll ? "See Less" : "See More"}
                                </Button>
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
