import Image from "next/image";
import { Button } from "../ui/button";
import { ApplyDialogForm } from "./apply-dialog-form";

export default function ServicesSection() {
    const services = [
        {
            icon: "/icons/Free-councelling-icon.svg",
            title: "Free Career Councelling Services",
            description:
                "We guide you in finding the best path for your future.",
        },
        {
            icon: "/icons/uni-selection.svg",
            title: "Institution Selection",
            description:
                "Let us help you find the perfect universities and courses that match your unique profile.",
        },
        {
            icon: "/icons/application-support.svg",
            title: "Course Selection",
            description:
                "Let us handle the paperwork; we’ll guide you through every step of the application process, making it easy and stress-free.",
        },
        {
            icon: "/icons/scholarship-loan.svg",
            title: "Grant & Financial Aid Support",
            description:
                "We’ll help you explore scholarships and guide you through education loans if you need them.",
        },
        {
            icon: "/icons/visa.svg",
            title: "Visa Assistance",
            description:
                "Getting a visa can feel complicated, but we’re here to make the process smooth and stress-free for you.",
        },
        {
            icon: "/icons/travel-service-icon.svg",
            title: "Housing and Transportation Support",
            description:
                "Easily secure safe housing and handle your travel plans — we’re here to help every step of the way.",
        },
        {
            icon: "/icons/post-arrival-icon.svg",
            title: "Arrival and Departure Guidance",
            description:
                "We’re with you every step of the way, from pre-departure to post-arrival, making your study abroad journey smooth and stress-free.",
        },
        {
            icon: "/icons/internship-service-icon.svg",
            title: "Work Experience and Career Assistance",
            description:
                "Discover exciting internship and part-time job opportunities to enrich your global experience and boost your career journey.",
        },
        {
            icon: "/icons/workshop-icon.svg",
            title: "Orientation Sessions and Continuous Assistance",
            description:
                "Get familiar with the culture, customs, and lifestyle of your study location so you feel right at home from day one.",
        },
    ];

    return (
        <section className="py-10 md:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                    <h2 className="text-teal-900 text-3xl md:text-4xl font-bold">
                        See How We Can Make Things{" "}
                        <span className="text-teal-600">Easier for You </span>
                    </h2>
                    <p className="mt-2 text-gray-600">
                        We are here to support you every step of the way.
                    </p>
                </div>
                <ApplyDialogForm>
                    <Button
                        variant="default"
                        className="  px-6 py-6 mt-3 md:mt-0 text-lg rounded-md font-medium flex items-center gap-2"
                    >
                        Get Started
                    </Button>
                </ApplyDialogForm>
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
