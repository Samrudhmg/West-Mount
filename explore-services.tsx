import { Button } from "@/stories/Button";
import {
    ArrowRight,
    Briefcase,
    Building,
    CreditCard,
    FileText,
    GraduationCap,
    Home,
    MessageSquare,
    TreesIcon as Plant,
    Wallet,
} from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
    const services = [
        {
            icon: "/icons/Free-councelling-icon.svg",
            title: "Free Career Councelling",
            description:
                "We help you figure out which path is best for your future",
        },
        {
            icon: "/icons/university-selection.svg",
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
            icon: "/icons/accommodation.svg",
            title: "Accommodation & Travel Assistance",
            description:
                "Find safe housing and manage travel logistics with ease.",
        },
        {
            icon: "/icons/predeparture.svg",
            title: "Predeparture and post arrival support",
            description:
                "We assist with finding scholarships and help with education loans if needed.",
        },
        {
            icon: "/icons/internship.svg",
            title: "Internship and job support",
            description:
                "Explore opportunities for internships and part-time jobs to enhance your global experience.",
        },
        {
            icon: "/icons/predeparture.svg",
            title: "Pre departure workshops & Ongoing Support",
            description:
                "Learn about the culture, customs, and lifestyle of your study destination to feel at home from day one.",
        },
    ];

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
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
                <Link
                    href="#"
                    className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 px-4 py-2 rounded-md transition-colors text-white"
                >
                    Get Started <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 pt-10 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow relative mt-8 shadow-[0px_0px_17px_-10px_#009689] min-h-[220px]"
                    >
                        {/* Icon Image */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                            <div className="bg-teal-700 rounded-full">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className=" md:w-[5rem]  md:h-[5rem] h-[4rem] w-[4rem]"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-center  gap-8">
                            <h3 className="text-teal-800 text-xl font-bold text-center mt-8">
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
