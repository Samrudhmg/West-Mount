import Image from "next/image";

const founders = [
    {
        name: "Jobin K Johnson",
        image: "/images/founder-1.svg",
    },
    {
        name: "Deepak Hari",
        image: "/images/founder-2.svg",
    },
    {
        name: "Ajith K.S",
        image: "/images/founder-3.svg",
    },
];

export default function FoundersSection() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-2">Founders</h2>
            <p className="text-gray-600 mb-10">
                We work with some of the best universities in the world to give
                you the best education options.
            </p>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {founders.map((founder, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center md:items-start"
                    >
                        <Image
                            src={founder.image}
                            alt={founder.name}
                            width={320}
                            height={320}
                            className="w-[320px] h-[320px] object-cover border border-gray-300 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl"
                        />
                        <h3 className="mt-4 font-semibold text-lg text-left">
                            {founder.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Started On Section */}
            <div className="flex flex-col items-start md:items-end  md:justify-end mt-8">
                <div className="flex items-center text-teal-600 gap-2">
                    <Image
                        src="/icons/founder.png"
                        alt="Founder Icon"
                        width={100}
                        height={100}
                        className="w-5 h-5"
                    />
                    <span className="uppercase text-lg font-medium tracking-wide">
                        STARTED ON
                    </span>
                </div>
                <div className="text-[26px] font-bold">2021 July 9</div>
            </div>
        </div>
    );
}
