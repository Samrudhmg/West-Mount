import Image from "next/image";
import { Plane } from "lucide-react";

export default function SuccessStoriesSection() {
    return (
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* Image section - Shows first on mobile and tablet */}
                    <div className="w-full lg:w-1/2 order-1 sm:order-1 lg:order-2">
                        <div className="relative rounded-xl flex items-center justify-center">
                            <Image
                                src="/images/testimonials-hero.jpg"
                                alt="Students walking on campus"
                                width={450}
                                height={400}
                                className="w-[100%] h-[100%] object-cover px-2 md:px-4 py-4" // Changed to px-2 on mobile
                            />

                            {/* Google Rating Badge - Centered */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center w-full">
                                <Image
                                    src="/images/success-rate.svg"
                                    width={280} // Slightly reduced width
                                    height={280} // Slightly reduced height
                                    alt="Google Ratings"
                                    className="mx-auto" // Added mx-auto to center the image
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text content - Shows second on mobile and tablet */}
                    <div className="w-full lg:w-1/2 order-2 sm:order-2 lg:order-1 flex flex-col gap-5 pt-8">
                        {" "}
                        {/* Increased top padding */}
                        <h2 className="text-5xl font-bold">
                            {" "}
                            {/* Added margin-top to move "Explore" down */}
                            Explore{" "}
                            <span className="text-teal-600">
                                success stories
                            </span>
                        </h2>
                        <p className="text-gray-700 mb-8 text-lg">
                            At West Mount Study Abroad, we turn your dream of
                            studying abroad into a seamless, successful reality
                            changing journey.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-2 border border-teal-600 text-teal-600 font-medium rounded hover:bg-teal-50 transition-colors">
                                Learn more
                            </button>
                            <button className="px-6 py-2 bg-teal-600 text-white font-medium rounded flex items-center gap-2 hover:bg-teal-700 transition-colors">
                                Start Your Journey Today{" "}
                                <Plane className="w-4 h-4" />
                            </button>
                        </div>
                        {/* Testimonial - Shows third on mobile */}
                        <div className="mt-10 bg-white p-6 max-w-md w-full rounded-lg shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.1)] order-3">
                            <div className="flex items-center gap-3 mb-2">
                                <Image
                                    src="/images/review-img1.jpg"
                                    alt="Mohammed Salih"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-medium">
                                        Mohammed Salih
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        a year ago
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <Image
                                        src="/icons/google-icon.png"
                                        alt="google"
                                        width={200}
                                        height={200}
                                        className="w-5 h-5"
                                    ></Image>
                                </div>
                            </div>
                            <div className="flex mb-2">
                                <Image
                                    src="/icons/stars.jpg"
                                    alt="stars"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="text-gray-700 text-sm">
                                I have attended my CA inter class in tripiei.
                                The classes are very good the main highlight is
                                the faculty pool, they also provides recording
                                of session that is very helpful for students and
                                infrastructure is also main highlight
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
