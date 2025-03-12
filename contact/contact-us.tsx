import Image from "next/image";

export default function LocateUs() {
    // Location data with coordinates and address information
    const locations = [
        {
            id: 1,
            name: "Ettumanoor",
            address:
                "Pattithanam, Round-about, Ettumanoor, Kottayam, Kerala, 686631, Above Skoda Showroom",
        },
        {
            id: 2,
            name: "Kochi",
            address:
                "Alinchuvadu, Palarivattom, Kochi, Ernakulam,Kerala, 682028",
        },
        {
            id: 3,
            name: "Kozhikode",
            address:
                "Delta Arcade, Medical College Rd, Chevayoor,Kozhikode, Kerala, 673017",
        },
    ];

    return (
        <div className="bg-gradient-to-r from-[#002328] via-[#003B43] to-[#002328] text-white min-h-screen w-full py-18 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-bold text-center mb-2">
                    Locate Us
                </h2>
                <p className="text-lg text-center mb-8">
                    Westmount Study joined has three branches across Kerala.
                </p>

                {/* Map with placeholder */}
                <div className="relative w-full h-[75vh] mb-10 mt-12">
                    <Image
                        src="/images/location-image.png"
                        alt="Kerala Map with Locations"
                        height={400}
                        width={400}
                        className="object-contain w-full h-full"
                    />
                </div>

                {/* Address boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {locations.map((location) => (
                        <div
                            key={`address-${location.id}`}
                            className=" bg-gradient-to-r from-[#015A66] via-[#015F70] to-[#007A8D] border border-teal-500 rounded-lg p-4 min-h-[200px] flex flex-col items-center justify-center text-center w-full gap-6"
                        >
                            {/* Consistent Icon Size & Position */}
                            <Image
                                src="/icons/location-icon.svg"
                                alt="location"
                                height={40}
                                width={40}
                                className="w-10 h-10 mb-2"
                            />

                            {/* Ensure All Addresses Stay in 3 Lines */}
                            <p className="text-lg leading-tight max-w-[90%] min-h-[66px] line-clamp-3 overflow-hidden text-ellipsis">
                                {location.address}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
