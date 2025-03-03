import Image from "next/image";
import { Plane } from "lucide-react";
import StudentAvatars from "../students-community";

export default function WestmountAbout() {
    return (
        <div className="container mx-auto px-4 pb-12  md:py-16 max-w-6xl">
            <div className="flex flex-col-reverse md:flex-row items-start gap-8 md:gap-12">
                {/* Left Content */}
                <div className="w-full md:w-1/2 space-y-6  md:mt-3">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        About <span className="text-teal-600">Westmount</span>{" "}
                        <br />
                        Study Abroad
                    </h1>

                    <p className="text-gray-600 text-lg">
                        The journey of Westmount&apos;s study abroad
                    </p>

                    <StudentAvatars />

                    <div className="flex flex-wrap gap-4 mt-6">
                        <button className="px-6 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                            Learn more
                        </button>
                        <button className="px-6 py-2.5 bg-teal-700 text-white rounded-md flex items-center gap-2 hover:bg-teal-800 transition-colors">
                            Get Started <Plane className="w-4 h-4 ml-1" />
                        </button>
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
                            <span className="text-sm text-gray-600">
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

                {/* Right Image */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        {/* Clouds */}
                        <div className="absolute top-8 right-8 z-10">
                            <svg
                                width="60"
                                height="30"
                                viewBox="0 0 60 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="white"
                                />
                                <path
                                    d="M35 25C43.2843 25 50 18.2843 50 10C50 1.71573 43.2843 -5 35 -5C26.7157 -5 20 1.71573 20 10C20 18.2843 26.7157 25 35 25Z"
                                    fill="white"
                                />
                                <path
                                    d="M60 20C65.5228 20 70 15.5228 70 10C70 4.47715 65.5228 0 60 0C54.4772 0 50 4.47715 50 10C50 15.5228 54.4772 20 60 20Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        <div className="absolute bottom-12 left-8 z-10">
                            <svg
                                width="60"
                                height="30"
                                viewBox="0 0 60 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="white"
                                />
                                <path
                                    d="M35 25C43.2843 25 50 18.2843 50 10C50 1.71573 43.2843 -5 35 -5C26.7157 -5 20 1.71573 20 10C20 18.2843 26.7157 25 35 25Z"
                                    fill="white"
                                />
                                <path
                                    d="M60 20C65.5228 20 70 15.5228 70 10C70 4.47715 65.5228 0 60 0C54.4772 0 50 4.47715 50 10C50 15.5228 54.4772 20 60 20Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        <div className="absolute top-1/4 right-1/4 z-10">
                            <svg
                                width="60"
                                height="30"
                                viewBox="0 0 60 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="white"
                                />
                                <path
                                    d="M35 25C43.2843 25 50 18.2843 50 10C50 1.71573 43.2843 -5 35 -5C26.7157 -5 20 1.71573 20 10C20 18.2843 26.7157 25 35 25Z"
                                    fill="white"
                                />
                                <path
                                    d="M60 20C65.5228 20 70 15.5228 70 10C70 4.47715 65.5228 0 60 0C54.4772 0 50 4.47715 50 10C50 15.5228 54.4772 20 60 20Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        {/* Paper Airplane */}
                        <div className="absolute bottom-12 right-12 z-10">
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 5L55 30L5 55V5Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        {/* Graduate Image */}
                        <Image
                            src="/images/serv-image.png"
                            alt="Graduate student in cap and gown"
                            fill
                            className="object-fill"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
