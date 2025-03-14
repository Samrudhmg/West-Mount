import Image from "next/image";
import { Button } from "../ui/button";

export default function ServicesSection() {
    const services = [
        {
            icon: "/icons/Free-councelling-icon.svg",
            title: "Free Career Councelling",
            description:
                "We help you figure out which path is best for your future",
        },
        {
            icon: "/icons/uni-selection.svg",
            title: "University Selection",
            description:
                "Get help choosing the right universities and courses that fit your profile.",
        },
        {
            icon: "/icons/application-support.svg",
            title: "Application Support",
            description:
                "Don't worry about paperwork. We'll guide you step by step through the application process.",
        },
        {
            icon: "/icons/scholarship-loan.svg",
            title: "Scholarship & Loan Assistance",
            description:
                "We assist with finding scholarships and help with education loans if needed.",
        },
        {
            icon: "/icons/visa.svg",
            title: "Visa Application Guidance",
            description:
                "Applying for a visa can be tough, but we'll make it simple and stress-free for you.",
        },
        {
            icon: "/icons/travel-service-icon.svg",
            title: "Accommodation & Travel Assistance",
            description:
                "Find safe housing and manage travel logistics with ease.",
        },
        {
            icon: "/icons/post-arrival-icon.svg",
            title: "Predeparture and post arrival support",
            description:
                "We assist with finding scholarships and help with education loans if needed.",
        },
        {
            icon: "/icons/internship-service-icon.svg",
            title: "Internship and job support",
            description:
                "Explore opportunities for internships and part-time jobs to enhance your global experience.",
        },
        {
            icon: "/icons/workshop-icon.svg",
            title: "Pre departure workshops & Ongoing Support",
            description:
                "Learn about the culture, customs, and lifestyle of your study destination to feel at home from day one.",
        },
    ];

    return (
        <section className="py-10 md:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                    <h2 className="text-teal-900 text-3xl md:text-4xl font-bold">
                        Explore{" "}
                        <span className="text-teal-600">our services</span>
                    </h2>
                    <p className="mt-2 text-gray-600">
                        We stand by your side every step of the way.
                    </p>
                </div>
                <Button
                    variant="default"
                    className="  px-6 py-6 mt-3 md:mt-0 text-lg rounded-md font-medium flex items-center gap-2"
                >
                    Get Started
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 pt-10 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:scale-105 relative mt-8 shadow-[0px_0px_17px_-10px_#009689] min-h-[220px]"
                    >
                        {/* Icon Image */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                            <div className="rounded-full">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={300}
                                    height={300}
                                    className="md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] rounded-full border-4 object-contain"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-center gap-4 md:gap-8">
                            <h3 className="text-teal-800 text-xl font-bold text-center mt-5 md:mt-8">
                                {service.title}
                            </h3>
                            <p className="text-black text-center text-sm">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
