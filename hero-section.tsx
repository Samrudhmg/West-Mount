"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 py-8 md:py-12 lg:py-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
                {/* Text Section - Made Wider */}
                <div className="space-y-4 md:space-y-5 lg:space-y-6 order-2 lg:order-1 lg:col-span-6">
                    <div className="space-y-2">
                        <h1 className="text-2xl text-black sm:text-3xl md:text-5xl lg:text-2xl xl:text-6xl font-bold tracking-tight">
                            <span className="whitespace-nowrap">
                                Your passport to success -
                            </span>{" "}
                            <span className="text-teal-600 text-3xl sm:text-4xl md:text-4xl xl:text-6xl leading-tight">
                                <br />
                                Study Abroad Starts
                                <br /> Here!
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-gray-600 mt-3 md:mt-4">
                            At West Mount Study Abroad, we turn your dream of
                            studying abroad into a seamless, successful
                            reality-changing journey.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-xs font-medium border-2 border-white">
                                NC
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                <Image
                                    src="/images/hero-img.svg?height=32&width=32"
                                    alt="Student avatar"
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                <Image
                                    src="/placeholder.svg?height=32&width=32"
                                    alt="Student avatar"
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <span className="text-xs sm:text-sm md:text-base text-gray-600">
                            1M+ students in our community
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="outline" className="rounded-md">
                            Learn more
                        </Button>
                        <Button className="rounded-md bg-teal-600 hover:bg-teal-700">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 mt-4 md:mt-6">
                        <div className="flex items-center">
                            <Image
                                src="/placeholder.svg?height=20&width=20"
                                alt="Google logo"
                                width={20}
                                height={20}
                                className="mr-1 md:mr-2"
                            />
                            <span className="text-xs md:text-sm font-medium">
                                Google Rating
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold text-xs md:text-sm mr-1">
                                4.9
                            </span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-3 h-3 md:w-4 md:h-4 text-yellow-400"
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
