import Image from "next/image";
import StudentAvatars from "../students-community";
import { Button } from "@/components/ui/button";
import { ApplyDialogForm } from "../apply-dialog-form";

export default function ServiceHero() {
    return (
        <div className="max-w-7xl mx-auto py-16 md:py-12 lg:py-16">
            <div className="relative w-full h-96 md:h-[50vh] lg:h-[70vh] xl:h-[60vh] rounded-xl overflow-hidden px-2">
                <Image
                    src="/images/service-hero-img.jpg"
                    alt="Airplane silhouette against a sunset sky"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                />
                {/* Overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black/30"></div> */}
            </div>

            {/* Content Section */}
            <div className="mt-6 text-left max-w-3xl px-2 md:px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 md:leading-14">
                    <span className="text-gray-900">Dreaming of </span>
                    <span className="text-teal-600">
                        Studying
                        <span className="hidden md:inline">
                            <br />
                        </span>{" "}
                        Abroad?
                    </span>{" "}
                    <span className="text-gray-900">
                        Let Us Make It a
                        <span className="hidden lg:inline">
                            <br />
                        </span>{" "}
                        Reality!
                    </span>
                </h1>

                <p className="text-gray-700 text-lg mb-6">
                    At West Mount Study Abroad, we turn your dream of <br />{" "}
                    studying abroad into a seamless and successful journey.
                    <br /> With expert guidance and personalized support, we're
                    <br />
                    your trusted partner every step of the way.
                </p>

                <div className="flex items-center mb-4">
                    <StudentAvatars />
                </div>

                <div className="flex flex-wrap gap-4">
                    <Button
                        variant="outline"
                        className="rounded-md py-5 text-[#006969]"
                    >
                        Learn more
                    </Button>
                    <ApplyDialogForm>
                        <Button variant="default" className="rounded-md py-5 ">
                            Get Started{" "}
                            <Image
                                src="icons/white-plane.svg"
                                alt="plane"
                                height={200}
                                width={100}
                                className="w-5 h-5"
                            />
                        </Button>
                    </ApplyDialogForm>
                </div>
            </div>
        </div>
    );
}
