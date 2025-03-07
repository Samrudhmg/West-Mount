"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StudentAvatars from "./students-community";

export default function Hero() {
    return (
        <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-12 lg:py-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
                {/* Text Section - Made Wider */}
                <div className="space-y-4 md:space-y-5 lg:space-y-6 order-2 lg:order-1 lg:col-span-6">
                    <div className="space-y-2">
                        <h1 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight">
                            <span className="whitespace-nowrap">
                                Your passport to success -
                            </span>{" "}
                            <span className="text-teal-600 text-3xl sm:text-4xl md:text-4xl xl:text-5xl leading-tight">
                                <br />
                                Study Abroad Starts
                                <br /> Here!
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-gray-600 mt-3 md:mt-4">
                            At West Mount Study Abroad, we turn your dream of
                            <br />
                            studying abroad into a seamless, successful reality
                            <br />
                            changing journey.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            <StudentAvatars />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            variant="outline"
                            className="rounded-md py-5 text-[#006969]"
                        >
                            Learn more
                        </Button>
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
                    </div>

                    <div className="flex items-center gap-2 mt-6">
                        <div className="w-10 h-">
                            <Image
                                src="/icons/google-icon.png"
                                alt="google"
                                width={300}
                                height={300}
                            ></Image>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                                Google Rating
                            </span>
                            <div className="flex items-center">
                                <span className="font-medium mr-1">5.0</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section - Reduced to col-span-6 */}
                <div className="relative flex justify-center order-1 lg:order-2 lg:col-span-6">
                    <Image
                        src="/images/hero-img.png"
                        alt="Student with books surrounded by country flags"
                        width={700}
                        height={700}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
