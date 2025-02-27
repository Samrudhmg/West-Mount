// import { ApplyDialogForm } from "@/components/main/apply-dialog-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StudyAbroadPage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-12 text-left  md:text-center">
            <div className="mb-8 md:hidden">
                <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
                    Dreaming of studying{" "}
                    <span className="text-[#006B5E]">abroad</span>?
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-gray-600">
                    Click below to schedule your free consultation and begin
                    your journey to studying abroad!
                </p>
            </div>

            <div className="mb-8">
                <Image
                    src="/images/Services-image.png"
                    alt="World map dotted pattern"
                    width={800}
                    height={400}
                    className="h-52 w-full object-cover  lg:h-auto"
                    priority
                />
            </div>

            <div className="hidden md:block">
                <h1 className="mb-4 text-4xl text-black font-semibold">
                    Dreaming of studying{" "}
                    <span className="text-[#006B5E]">abroad</span>?
                </h1>

                <p className="mx-auto mb-8 max-w-3xl text-gray-600">
                    Click below to schedule your free consultation and begin
                    your journey to studying abroad!
                </p>
            </div>

            <div className="flex justify-center">
                {/* <ApplyDialogForm>  */}
                <Button
                    className="flex bg-teal-700 h-12 items-center"
                    variant="nothing"
                >
                    Get Started
                    <img
                        src="/icons/plane-white.svg"
                        alt=""
                        className=" size-5"
                    />
                </Button>
                {/* </ApplyDialogForm> */}
            </div>
        </div>
    );
}
