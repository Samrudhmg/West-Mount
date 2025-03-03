import type React from "react";
import Image from "next/image";

export default function ServicesSection() {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {" "}
                {/* Slightly wider width */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-semibold">
                        Our services -{" "}
                        <span className="text-teal-600">
                            Every Step of the Way
                        </span>
                    </h2>
                    <p className="text-gray-600 mt-1">
                        We stand by your side every step of the way.
                    </p>
                </div>
                {/* Grid with reduced gap and optimized line height */}
                <div className="grid md:grid-cols-[0.40fr_0.40fr] gap-16 justify-center">
                    {/* Left Column */}
                    <div className="space-y-12 w-full">
                        <ServiceCardRight
                            icon="/icons/Free-councelling-icon.svg"
                            title="Free Career Counseling"
                            description="We help you figure out what path is best for your future."
                        />
                        <ServiceCardRight
                            icon="/icons/application-support.svg"
                            title="Application Support"
                            description="Don't worry about paperwork, we'll guide you step by step."
                        />
                        <ServiceCardRight
                            icon="/icons/visa.svg"
                            title="Visa Application Guidance"
                            description="Applying for a visa can be tough, but we make it simple."
                        />
                        <ServiceCardRight
                            icon="/icons/predeparture.svg"
                            title="Predeparture and Post Arrival Support"
                            description="We assist with finding accommodation and help with loans."
                        />
                        <ServiceCardRight
                            icon="/icons/internship.svg"
                            title="Internship and Job Support"
                            description="Explore internship and part-time job opportunities."
                        />
                        <ServiceCardRight
                            icon="/icons/forex-icon.svg"
                            title="Forex Support"
                            description="Help with foreign exchange at competitive rates."
                        />
                        <ServiceCardRight
                            icon="/icons/health-icon.svg"
                            title="Health and Travel Insurance Guidance"
                            description="Support in choosing suitable insurance plans."
                        />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12 w-full">
                        <ServiceCardLeft
                            icon="/icons/university-selection.svg"
                            title="University Selection"
                            description="We help choose the right universities for your profile."
                        />
                        <ServiceCardLeft
                            icon="/icons/scholarship-loan.svg"
                            title="Scholarship & Loan Assistance"
                            description="We assist with scholarships and education loans."
                        />
                        <ServiceCardLeft
                            icon="/icons/accommodation.svg"
                            title="Accommodation & Travel Assistance"
                            description="Find the best housing and travel options with ease."
                        />
                        <ServiceCardLeft
                            icon="/icons/predeparture.svg"
                            title="Pre-departure Workshops & Ongoing Support"
                            description="Learn about your study destination's culture and lifestyle."
                        />
                        <ServiceCardLeft
                            icon="/icons/pickup-icon.svg"
                            title="Pre-departure Workshops & Ongoing Support"
                            description="Learn about your study destination's culture and lifestyle."
                        />
                        <ServiceCardLeft
                            icon="/icons/travel-icon.svg"
                            title="Pick-Up and Drop Services"
                            description="Safe and reliable airport pick-up and drop-off services."
                        />
                        <ServiceCardLeft
                            icon="/icons/predeparture.svg"
                            title="Travel Assistance"
                            description="Help with booking flights and arranging transportation."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

/* Icon on the RIGHT */
function ServiceCardRight({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="flex items-center justify-between gap-5">
            <div className="flex flex-col gap-2 flex-grow text-right ">
                <h3 className="font-bold text-teal-600 text-lg leading-5">
                    {title}
                </h3>
                <p className=" text-gray-600 text-sm leading-4">
                    {description}
                </p>
            </div>
            <div className="bg-teal-600 p-3 rounded-md flex-shrink-0">
                <Image
                    src={icon}
                    height={400}
                    width={400}
                    alt="Custom Icon"
                    className="h-full w-full"
                />
                {/* change the icons to the original icons or bring this icon and replace it with the older icons */}
            </div>
        </div>
    );
}

/* Icon on the LEFT */
function ServiceCardLeft({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="flex items-center justify-between gap-5">
            <div className="bg-teal-600 p-3 rounded-md flex-shrink-0">
                {icon}
            </div>
            <div className="flex flex-col gap-2 flex-grow ">
                <h3 className="font-bold text-teal-600 text-lg leading-5">
                    {title}
                </h3>
                <p className=" text-sm text-gray-600 leading-4">
                    {description}
                </p>
            </div>
        </div>
    );
}
