import type React from "react";
import Image from "next/image";

export default function ServicesSection() {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {" "}
                {/* Slightly wider width */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-3xl font-semibold">
                        Our solutions -{" "}
                        <span className="text-teal-600">
                            Each step to your success
                        </span>
                    </h2>
                    <p className="text-gray-600 mt-1">
                        We’re with you at every step of the journey, supporting
                        you all the way.
                    </p>
                </div>
                {/* Grid with reduced gap and optimized line height */}
                <div className="grid md:grid-cols-[0.50fr_0.50fr] lg:grid-cols-[0.40fr_0.40fr] gap-16 md:gap-10  lg:gap-16 justify-center">
                    {/* Left Column */}
                    <div className="space-y-12 w-full">
                        <ServiceCardRight
                            icon="/icons/free-career.svg"
                            title="Free Career Coaching"
                            description="We help you discover the right path to build a bright and successful future."
                        />
                        <ServiceCardRight
                            icon="/icons/application-icon.svg"
                            title="Application process"
                            description="No need to stress about the paperwork — we’ll walk you through every step of the application process, making it smooth and easy."
                        />
                        <ServiceCardRight
                            icon="/icons/visa-icon.svg"
                            title="Immigration assistance"
                            description="Visa applications can be challenging, but don’t worry — we’ve got your back and will help you every step of the way."
                        />
                        <ServiceCardRight
                            icon="/icons/predeparture.svg"
                            title="Pre-travel & Welcome assistance"
                            description="We help you find scholarships and assist with education loans, making your study journey easier and more affordable."
                        />
                        <ServiceCardRight
                            icon="/icons/internship.svg"
                            title="Work placement & Career assistance"
                            description="Boost your global experience by exploring exciting internship and part-time job opportunities along the way."
                        />
                        <ServiceCardRight
                            icon="/icons/forex.svg"
                            title="Forex Support"
                            description="Get foreign exchange support, competitive rates, and smart financial tips to manage your money while studying abroad."
                        />
                        <ServiceCardRight
                            icon="/icons/health.svg"
                            title="Health and Travel Insurance Guidance"
                            description="Get expert help choosing insurance plans to cover medical needs and travel essentials while studying abroad."
                        />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12 w-full">
                        <ServiceCardLeft
                            icon="/icons/university-selection.svg"
                            title="Choosing the right university"
                            description="We’ll help you find the perfect universities and courses that align with your unique profile and goals."
                        />
                        <ServiceCardLeft
                            icon="/icons/scholarship.svg"
                            title="Fellowship & Loan consultant"
                            description="We help you find scholarships and education loans, making funding your studies smooth, easy, and worry-free."
                        />
                        <ServiceCardLeft
                            icon="/icons/accommodation.svg"
                            title="Housing & Trip Assistance"
                            description="Find a safe place to live and sort out your travel plans without the stress, we’re here to help every step of the way."
                        />
                        <ServiceCardLeft
                            icon="/icons/ongoing-support.svg"
                            title="Pre-travel sessions & Continuous assistance"
                            description="Familiarize yourself with the culture, customs, and lifestyle in your study destination., so you’ll feel at home from day one."
                        />
                        <ServiceCardLeft
                            icon="/icons/pre-departure-support.svg"
                            title="Pre-departure Workshops & Ongoing Support"
                            description="Learn about your study destination's culture and lifestyle."
                        />
                        <ServiceCardLeft
                            icon="/icons/pickup-drop.svg"
                            title="Pick-Up and Drop Services"
                            description="Travel stress-free with our reliable airport pick-up and drop-off services, ensuring a smooth start and finish."
                        />
                        <ServiceCardLeft
                            icon="/icons/travel-assistance.svg"
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
            <div className=" bg-teal-900 rounded-2xl flex-shrink-0">
                <Image
                    src={icon || "/default-image.png"}
                    height={500}
                    width={500}
                    alt="Custom Icon"
                    className="h-26 w-fit "
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
            <div className=" bg-teal-900 rounded-2xl flex-shrink-0">
                <Image
                    src={icon}
                    height={500}
                    width={500}
                    alt="Custom Icon"
                    className="h-26 w-fit "
                />
                {/* change the icons to the original icons or bring this icon and replace it with the older icons */}
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
