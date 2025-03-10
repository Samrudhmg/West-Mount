import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Questions() {
    return (
        <section className="text-black bg-gradient-to-r from-[#002328] via-[#003B43] to-[#002328] flex flex-col items-center justify-center h-54 md:h-60 gap-5">
            <div className="text-white text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-semibold text-white">
                    Got any questions?
                </h1>
                <p className="md:text-2xl">Our team is ready to assist!</p>
            </div>
            <div className="flex gap-3 text-white">
                {/* WhatsApp Link */}
                <Link
                    href="https://wa.me/919072123477" // WhatsApp direct message link
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl flex items-center gap-2">
                        Whatsapp Now
                        <Image
                            src="/icons/whatsapp.svg"
                            alt="WhatsApp"
                            className="size-6"
                            width={100}
                            height={100}
                        />
                    </Button>
                </Link>

                {/* Call Us Link (Using <a> instead of <Link>) */}
                <a href="tel:+919072123477">
                    <Button
                        variant="default"
                        className=" text-white py-6 flex rounded-xl items-center gap-2"
                    >
                        Call Us
                        <Image
                            src="/icons/call-fill.svg"
                            alt="Call"
                            className="size-6"
                            width={100}
                            height={100}
                        />
                    </Button>
                </a>
            </div>
        </section>
    );
}
