import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ApplyDialogForm } from "./apply-dialog-form";

const features = [
    {
        title: "Expert Guidance",
        description:
            "Not sure which course or university is right for you? Don't worry, we'll guide you based on your interests and goals.",
    },
    {
        title: "Personalised Support",
        description:
            "Whether it's preparing your application, securing a visa, or finding accommodation, we take care of everything so you don't have to stress.",
    },
    {
        title: "Scholarship Assistance",
        description:
            "We'll help you find and apply for scholarships to reduce the cost of your education.",
    },
    {
        title: "Cultural Preparation",
        description:
            "Our team will prepare you to adapt to life in a new country with tips and pre-departure workshops.",
    },
    {
        title: "Global Network",
        description:
            "Connect with prestigious universities and innovative programs worldwide.",
    },
    {
        title: "Transparent Process",
        description:
            "We provide clear, honest advice so you can make the best decisions for your future.",
    },
];

export default function WhyChooseUs() {
    return (
        <main className="py-12 w-full">
            <section className="bg-[#0a2a2f] text-white w-full mx-auto py-7 md:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold md:text-center text-left mb-4">
                        Why Choose Us?
                    </h2>

                    <p className=" md:text-center text-left max-w-4xl mx-auto mb-12 text-sm md:text-base">
                        At West Mount Study Abroad, we are committed to turning
                        your dream of studying abroad into a seamless,
                        successful reality. Here's why students and families
                        trust us as their partner in this life-changing journey:
                    </p>

                    {/* Mapping Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <ApplyDialogForm>
                            <Button className="bg-white text-[#006969] hover:bg-[#005B5B] hover:text-white px-6 py-6 text-lg rounded-md font-medium flex items-center gap-2 group">
                                Get Started
                                <Image
                                    src="/icons/plane.svg"
                                    alt="plane icon"
                                    width={20}
                                    height={20}
                                    className="group-hover:hidden w-6 h-6"
                                />
                                <Image
                                    src="/icons/white-plane.svg"
                                    alt="hovered plane icon"
                                    width={20}
                                    height={20}
                                    className="hidden group-hover:block w-6 h-6"
                                />
                            </Button>
                        </ApplyDialogForm>
                    </div>
                </div>
            </section>
        </main>
    );
}

function FeatureCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="bg-gradient-to-b from-[#007A8D] to-[#015A66] border border-[#FFFFFF40] p-6 rounded-2xl">
            <div className="flex flex-col">
                <div className="mb-4">
                    <div className=" w-12 h-12 rounded-full flex items-center justify-center">
                        <Image
                            src="icons/benifit-icon.svg"
                            alt="placeholder.png"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
            </div>
        </div>
    );
}
