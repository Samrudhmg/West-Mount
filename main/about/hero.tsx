import Image from "next/image";
import { Plane } from "lucide-react";
import StudentAvatars from "../students-community";
import { Button } from "@/components/ui/button";
import { ApplyDialogForm } from "../apply-dialog-form";
import UpCommingEvents from "../up-events";

export default function WestmountAbout() {
    return (
        <div className="container  mx-auto px-4 pb-12  md:py-22 max-w-6xl">
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
                        <Button
                            variant="outline"
                            className="rounded-md py-5 text-[#006969]"
                        >
                            Learn more
                        </Button>
                        <ApplyDialogForm>
                            <Button
                                variant="default"
                                className="rounded-md py-5 "
                            >
                                Get Started{" "}
                                <Image
                                    src="icons/white-plane.svg"
                                    alt="plane"
                                    height={200}
                                    width={100}
                                    className="w-5 h-5"
                                />
                            </Button>
                        </ApplyDialogForm>
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
                <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
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
            <UpCommingEvents />
        </div>
    );
}
