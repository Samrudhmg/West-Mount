import { ApplyDialogForm } from "@/components/main/apply-dialog-form";
import { ApplyForm } from "./applyform";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
    return (
        <div className="container max-w-7xl mx-auto grid items-start justify-around gap-12 px-4 py-12 md:grid-cols-2 md:gap-6 md:px-12 md:py-1 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-6 md:my-auto md:p-2 lg:p-18">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold text-black">
                        Contact <span className="text-teal-600">Us</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Let's make your dream of studying abroad a reality.
                        <br />
                        Contact us today!
                    </p>
                </div>
                <div className="space-y-5 text-lg">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="size-5" />
                        <a
                            href="mailto:westmountoverseas@gmail.com"
                            className="font-semibold text-teal-900"
                        >
                            westmountoverseas@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="size-5" />
                        <a
                            href="tel:+919072123477"
                            className="font-semibold text-teal-900"
                        >
                            +91 907212 3477
                        </a>
                    </div>
                </div>
                <div className="flex gap-4">
                    <ApplyDialogForm>
                        <Button
                            variant="nothing"
                            className="h-10 bg-teal-500 px-5 text-white"
                        >
                            Contact us
                        </Button>
                    </ApplyDialogForm>
                    <ApplyDialogForm>
                        <Button
                            className="flex h-10 items-center bg-teal-500"
                            variant="nothing"
                        >
                            Download Brochure
                            <img
                                src="/icons/plane-icon.svg"
                                alt=""
                                className="size-5"
                            />
                        </Button>
                    </ApplyDialogForm>
                </div>
            </div>

            {/* Right Column */}
            <div className="mx-auto hidden md:mt-[-10px] md:block md:w-[100%] lg:w-[80%]">
                <ApplyForm />
            </div>
        </div>
    );
}
