import Image from "next/image";

export default function StudyAbroadLanding() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-8 mb-24">
                <div className="w-full md:w-1/2 space-y-4">
                    <h1 className="text-3xl text-left md:text-right md:text-4xl lg:text-4xl font-bold text-black leading-tight">
                        Join the{" "}
                        <span className="text-teal-600">
                            Westmount Study Abroad
                        </span>{" "}
                        program with a{" "}
                        <span className="text-teal-600">99%</span>
                        <br /> visa success rate!
                    </h1>
                    <p className="text-gray-600 text-lg text-left md:text-right">
                        Secure your dream course with confidence and clarity.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="rounded-lg overflow-hidden shadow-lg max-w-[400px]">
                        <Image
                            src="/images/Success-Image.jpg"
                            alt="Student with books"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Second Section - Image First on md/lg, Text First on Mobile */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-8">
                {/* Image first on md/lg, second on mobile */}
                <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                    <div className="rounded-lg overflow-hidden shadow-lg max-w-[400px]">
                        <Image
                            src="/images/Opportunities-Image.jpg"
                            alt="Students looking at a view"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
                {/* Text second on md/lg, first on mobile */}
                <div className="w-full md:w-1/2 space-y-4 order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight">
                        Expand your horizons with{" "}
                        <span className="text-teal-600">
                            Westmount Study Abroad
                        </span>
                        , unlocking new global opportunities.
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Make your international aspirations a reality.
                    </p>
                </div>
            </section>
        </div>
    );
}
