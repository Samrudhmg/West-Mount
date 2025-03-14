import { ApplyDialogForm } from "@/components/main/apply-dialog-form";
import { ApplyForm } from "./applyform";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactForm() {
    return (
        <div className="container max-w-7xl mx-auto flex flex-col  md:flex md:flex-row-reverse items-center justify-center gap-10 px-4 py-12 md:px-8 lg:px-12 md:py-14">
            {/* Left Column - 40% width */}
            <div
                className="relative w-full  md:w-[30%] py-14 max-w-sm rounded-lg overflow-hidden bg-[#032022]
                text-white p-8"
            >
                <Image
                    src="/images/map-contact.png"
                    alt="map-image"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                />
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">
                            Your passport to{" "}
                            <span className="text-teal-400">success.</span>
                        </h2>
                        <h3 className="text-2xl font-bold">
                            Study abroad starts here
                        </h3>
                    </div>

                    <p className="text-sm opacity-90">
                        Complete the form to attend a free career counselling
                        session from an expert.
                    </p>

                    <div className="space-y-3 pt-4">
                        <Link
                            href="mailto:westmountoverseas@gmail.com"
                            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>westmountoverseas@gmail.com</span>
                        </Link>

                        <Link
                            href="tel:+919072123477"
                            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span>+91 9072123477</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Column - 50% width */}
            <div className=" w-full md:w-[60%]">
                <ApplyForm />
            </div>
        </div>
    );
}
