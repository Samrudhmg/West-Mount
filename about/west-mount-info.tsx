import Link from "next/link";

export default function Westmountinfo() {
    return (
        <section className=" text-black text-xl  md:text-4xl font-semibold bg-gradient-to-r from-[#002328] via-[#003B43] to-[#002328] flex flex-col items-center justify-center h-54 md:h-60 gap-5">
            <h1 className="max-w-[90%] text-white">
                At{" "}
                <span className="text-teal-400"> West Mount Study Abroad</span>,
                we’re passionate about helping students turn their{" "}
                <span className="text-teal-400">
                    dreams of studying abroad into reality
                </span>
                <br /> with the{" "}
                <span className="text-teal-400">right guidance</span>every step
                of the way.
            </h1>
        </section>
    );
}
