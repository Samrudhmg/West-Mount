"use client";

import { client } from "@/api/client";
import CustomCarousel from "./custom-carousel";
import Link from "next/link";
import Image from "next/image";

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

export default function StayConnected() {
    return (
        <main className="flex flex-col space-y-14 py-10">
            <div className="text-center flex flex-col gap-3">
                <h1 className="text-4xl font-semibold">
                    Stay <span className="text-teal-600">connected</span> with
                    us!
                </h1>
                <p className="text-gray-800">Follow Us on social media pages</p>
            </div>
            <div>
                <CustomCarousel />
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
        </main>
    );
}
