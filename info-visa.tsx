import Image from "next/image";

export default function StudyAbroadLanding() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 md:space-y-24">
            {/* First section - reverse order on desktop */}
            {/* Text content */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10  md:gap-28">
                {/* Image container - appears first on mobile */}
                <div className="w-full md:w-1/2 flex justify-start">
                    <div className="max-w-lg relative">
                        <Image
                            src="/images/Success-Image.jpg"
                            alt="nothing"
                            width={400}
                            height={440}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Text content - Starts from left, but is aligned to the right side of the container */}
                <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center items-start text-start md:ml-18">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Join the{" "}
                        <span className="text-[#006969]">
                            Westmount Study
                            <br />
                            Abroad
                        </span>{" "}
                        program with a 99% <br />
                        visa success rate!
                    </h2>
                    <p className="text-gray-600">
                        Secure your dream course with confidence and clarity.
                    </p>
                </div>
            </div>

            {/* Second section - normal order */}
            <div className="flex flex-col md:flex-row items-center gap-10  md:gap-28">
                {/* Image container - appears first on mobile */}
                <div className="w-full md:w-1/2 flex justify-end">
                    <div className="max-w-lg">
                        {" "}
                        {/* Increased max width slightly */}
                        <Image
                            src="/images/Opportunities-Image.jpg"
                            alt="Group of students looking at a view"
                            width={400} // Slightly increased width
                            height={400} // Slightly increased height
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Text content */}
                <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center items-start">
                    <h2 className="text-3xl md:text-4xl  font-bold ">
                        Expand your horizons with
                        <br />{" "}
                        <span className="text-[#006969]">
                            Westmount Study Abroad
                        </span>
                        ,<br /> unlocking new global
                        <br /> opportunities.
                    </h2>
                    <p className="text-gray-600">
                        Make your international aspirations a reality.
                    </p>
                </div>
            </div>
        </div>
    );
}
