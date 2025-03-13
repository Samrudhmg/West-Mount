"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated import
import { useEffect, useState } from "react";

const socialLinks = [
    {
        id: 1,
        href: "https://www.instagram.com/west_mount_studyabroad",
        src: "/icons/instagram.svg",
        alt: "Instagram",
    },
    {
        id: 2,
        href: "https://www.facebook.com/Westmount.Studyabroad/",
        src: "/icons/facebook.svg",
        alt: "Facebook",
    },
    {
        id: 3,
        href: "https://www.youtube.com/@westmountstudyabroad",
        src: "/icons/youtube.svg",
        alt: "LinkedIn",
    },
];

export default function ThankYouPage() {
    const router = useRouter();
    const [imageSource, setImageSource] = useState("/icons/tick.gif");

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageSource("/icons/tick.svg");
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    const handleGoBack = () => {
        try {
            router.back();
        } catch (error) {
            console.error("Failed to navigate:", error);
        }
    };

    return (
        <div className="bg-white w-full h-[90vh] ">
            <div className="container mx-auto">
                <div className="flex  items-center justify-center">
                    <div className="w-full py-5 text-center md:w-1/2">
                        <div className="mb-4 inline-flex size-32 items-center justify-center rounded-full bg-teal-700">
                            <Image
                                id="tick"
                                src={imageSource}
                                alt="Success"
                                width={130}
                                height={130}
                                priority
                                title="Success"
                            />
                        </div>

                        <h1 className="mb-3 text-2xl lg:text-4xl font-bold">
                            <span className="text-[#006969]">Thank you,</span>{" "}
                            for submitting!
                        </h1>
                        <p className="mb-4 text-gray-600 lg:text-xl">
                            Our team will connect with you soon!
                        </p>

                        <Button
                            onClick={handleGoBack}
                            className="my-2 min-w-36 rounded-md  py-6 text-sm font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-West-accent focus:ring-offset-2"
                            type="submit"
                            variant="default"
                        >
                            Back to home
                        </Button>

                        <p className="mb-4 text-gray-500">
                            STAY CONNECTED WITH US
                        </p>
                        <div className="mt-10">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/images/West-Mount-Logo.png"
                                    alt="Triple I Logo"
                                    title="Triple I Commerce Academy"
                                    width={200}
                                    height={200}
                                />
                            </div>

                            <div className="flex items-center justify-center gap-4">
                                {socialLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 transition-opacity"
                                    >
                                        <Image
                                            src={link.src}
                                            alt={link.alt}
                                            width={24}
                                            height={24}
                                            className="w-14 h-14"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
