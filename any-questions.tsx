import Link from "next/link";
import { Button } from "../ui/button";

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
                    <Button
                        className="bg-green-600 text-white py-6 rounded-xl flex items-center gap-2"
                        variant="nothing"
                    >
                        Whatsapp Now
                        <img
                            src="/icons/whatsapp.svg"
                            alt="WhatsApp"
                            className="size-6"
                        />
                    </Button>
                </Link>

                {/* Call Us Link (Using <a> instead of <Link>) */}
                <a href="tel:+919072123477">
                    <Button
                        className="bg-teal-600 text-white py-6 flex rounded-xl items-center gap-2"
                        variant="nothing"
                    >
                        Call Us
                        <img
                            src="/icons/call-fill.svg"
                            alt="Call"
                            className="size-6"
                        />
                    </Button>
                </a>
            </div>
        </section>
    );
}
