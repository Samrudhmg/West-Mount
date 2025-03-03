import Image from "next/image";

export default function OurStorySection() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-5 md:mb-12">
                Our <span className="text-teal-600">Story</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2   mb-6 items-center">
                {/* First Component */}
                <div>
                    <Image
                        src="/images/success-img1.svg"
                        alt="Airplane flying through clouds"
                        width={500}
                        height={350}
                        className="rounded-lg w-full h-auto object-fill aspect-[4/3]"
                    />
                </div>
                <div className="w-full max-w-[90%]  md:max-w-[80%] text-justify mx-auto ">
                    <p className="text-gray-700 leading-relaxed mt-5 md:mt-0">
                        <span className="text-teal-500 font-bold ">
                            West Mount Study Abroad
                        </span>{" "}
                        began with a mission to bridge the gap between aspiring
                        students and the opportunities available abroad. Our
                        focus has always been on understanding students' unique
                        aspirations and guiding them toward universities that
                        align with their goals and needs.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        When we started, Ireland was a largely untapped
                        destination among study abroad agencies in Kerala.
                        Recognizing this opportunity, we positioned ourselves as
                        pioneers in promoting Ireland as a promising option for
                        higher education.
                    </p>
                </div>
            </div>

            <div className=" flex flex-col-reverse grid-cols-1 md:grid-cols-2  mb-3  md:mb-16 items-center">
                {/* Text First in Second Component */}
                <div className="space-y-4 text-justify max-w-[90%]  md:max-w-[80%] mt-4 md:mt-0  mx-auto">
                    {" "}
                    {/* Prevent shrinking */}
                    <p className="text-gray-700 leading-relaxed">
                        Our initial focus was on commerce and related fields,
                        offering tailored guidance for students aiming to pursue
                        careers in business, finance, and management.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Through our journey, we discovered a significant gap in
                        Kerala when it came to expert career guidance,
                        counseling tailored to students' degrees, and
                        streamlined visa processing. This realization inspired
                        us to expand our services beyond Ireland, venturing into
                        other European countries and diverse fields of study,
                        including Engineering, Medicine, Pharmacy, Computing,
                        and more.
                    </p>
                </div>
                {/* Image Last in Second Component */}
                <div className=" w-full">
                    <Image
                        src="/images/success-img2.svg"
                        alt="Airplane flying through clouds"
                        width={500}
                        height={350}
                        className="rounded-lg w-full h-auto object-fill aspect-[4/3]"
                    />
                </div>
            </div>
        </div>
    );
}
