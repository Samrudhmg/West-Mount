import Image from "next/image";
import StudentAvatars from "../students-community";

export default function ServiceHero() {
    return (
        <div className="max-w-7xl mx-auto mt-16">
            <div className="relative w-full h-80 rounded-3xl overflow-hidden">
                <Image
                    src="/images/plane-image.jpg"
                    alt="Airplane silhouette against a sunset sky"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Section */}
            <div className="mt-6 text-left max-w-3xl">
                <h1 className="text-5xl font-bold mb-4 leading-14">
                    <span className="text-gray-900">Dreaming of </span>
                    <span className="text-teal-600">
                        Studying
                        <br /> Abroad?
                    </span>
                    <span className="text-gray-900">
                        {" "}
                        Let Us Make It a<br /> Reality!
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
                    <button className="px-6 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                        Learn more
                    </button>
                    <button className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 flex items-center">
                        Start Your Journey Today
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
