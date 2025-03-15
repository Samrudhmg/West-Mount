import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ApplyDialogForm } from "./apply-dialog-form";

const features = [
    {
        title: "Expert Guidance",
        description:
            "Are you confused about the right course or university? Don't worry — we will help you find the perfect fit based on your passions and goals.",
    },
    {
        title: "Personalised Support",
        description:
            "From applications to visas and even finding your home abroad, we handle it all so you can focus on your dreams stress-free.",
    },
    {
        title: "Scholarship Assistance",
        description:
            "Dream big, pay less! We will help you find and apply for scholarships to make your education more affordable.",
    },
    {
        title: "Cultural Preparation",
        description:
            "Get ready for your new adventure! Our team will help you adapt with expert tips and pre-departure workshops.",
    },
    {
        title: "Global Network",
        description:
            "Unlock doors to top universities and cutting-edge programs worldwide.",
    },
    {
        title: "Transparent Process",
        description:
            "We are here to give you clear, honest advice, helping you make confident choices for a brighter future.",
    },
];

export default function WhyChooseUs() {
    return (
        <main className="py-12 w-full">
            <section className="bg-[#0a2a2f] text-white w-full mx-auto py-7 md:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold md:text-center text-left mb-4">
                        Why West Mount Study Abroad ?
                    </h2>

                    <p className=" md:text-center text-left max-w-4xl mx-auto mb-12 text-sm md:text-base">
                        At West Mount Study Abroad Consultants, we make your
                        dream of studying abroad a smooth and successful
                        reality. That's why students and families trust us on
                        this life-changing journey.
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
