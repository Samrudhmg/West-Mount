import Image from "next/image";

export default function OurStorySection() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-5 md:mb-12">
                Our <span className="text-teal-600">Story</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 items-center">
                {/* First Component */}
                <div>
                    <Image
                        src="/images/success-img1.svg"
                        alt="Airplane flying through clouds"
                        width={500}
                        height={350}
                        className="rounded-lg w-full h-auto object-cover md:object-fill aspect-[4/3]"
                    />
                </div>
                <div className="w-full max-w-[90%] md:max-w-[80%] text-justify mx-auto">
                    <p className="text-gray-700 leading-relaxed mt-5 md:mt-0">
                        <span className="text-teal-500 font-bold">
                            West Mount Study Abroad
                        </span>{" "}
                        was founded with a clear mission — to connect ambitious
                        students with life-changing opportunities abroad. From
                        the start, our passion has been understanding each
                        student’s unique aspirations and guiding them toward
                        universities that align with their goals.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        At the beginning of our journey, Ireland was still a
                        hidden gem among study-abroad options in Kerala. Seeing
                        its incredible potential, we proudly took the initiative
                        to promote Ireland as a top choice for higher education.
                    </p>
                </div>
            </div>

            {/* Second Component - Image Right, Image First on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 items-center">
                {/* Text First on Desktop, Image First on Mobile */}
                <div className="w-full max-w-[90%] md:max-w-[80%] text-justify mx-auto">
                    <p className="text-gray-700 leading-relaxed mt-5 md:mt-0">
                        At first, we focused on commerce and related fields,
                        helping students pursue careers in business, finance,
                        and management with personalized guidance.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        As we grew, we noticed a major gap in Kerala — students
                        lacked access to expert career advice, personalized
                        guidance for their degrees, and smooth visa processing.
                        This inspired us to expand our services beyond Ireland,
                        reaching into other European countries and offering a
                        diverse range of options, including Engineering,
                        Medicine, Pharmacy, Computing, and more.
                    </p>
                </div>
                {/* Image First on Mobile, Right on Desktop */}
                <div className="order-first md:order-none">
                    <Image
                        src="/images/success-img2.svg"
                        alt="Airplane flying through clouds"
                        width={500}
                        height={350}
                        className="rounded-lg w-full h-auto object-cover md:object-fill aspect-[4/3]"
                    />
                </div>
            </div>
        </div>
    );
}
