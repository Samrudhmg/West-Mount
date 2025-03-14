"use client";

import type { CreateLeadDTO } from "@/lib/enquire.forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createLead } from "@/lib/enquire.forms";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { DatePicker } from "./date-picker";

// const COURSE_OPTIONS = [
//     { value: "ACCA", label: "ACCA" },
//     { value: "CA", label: "CA" },
//     { value: "CMA IND", label: "CMA IND" },
//     { value: "CMA US", label: "CMA US" },
//     { value: "CS", label: "CS" },
//     { value: "Commerce Entrance", label: "Commerce Entrance" },
// ] as const;

const DATE_INTAKES = [
    { value: "1", label: "May 2025" },
    { value: "2", label: "June 2025" },
    { value: "3", label: "February 2025" },
    { value: "4", label: "December 2025" },
    {
        value: "Commerce Professional Student",
        label: "Commerce Professional Student",
    },
] as const;
const COUNTRY_OPTIONS = [
    {
        name: "India",
        code: "IN",
        flag: "/icons/india.svg",
        dialCode: "+91",
    },
    {
        name: "United Kingdom",
        code: "GB",
        flag: "/icons/united-Kingdom.svg",
        dialCode: "+44",
    },
    {
        name: "Ireland",
        code: "IE",
        flag: "/icons/Ireland-icon.svg",
        dialCode: "+353",
    },
    {
        name: "Germany",
        code: "DE",
        flag: "/icons/germany.svg",
        dialCode: "+49",
    },
    {
        name: "Austria",
        code: "AT",
        flag: "/icons/austria.svg",
        dialCode: "+43",
    },
    {
        name: "Slovakia",
        code: "SK",
        flag: "/icons/slovakia.svg",
        dialCode: "+421",
    },
    {
        name: "Poland",
        code: "PL",
        flag: "/icons/poland.svg",
        dialCode: "+48",
    },
    {
        name: "Czech Republic",
        code: "CZ",
        flag: "/icons/czech-republic.svg",
        dialCode: "+420",
    },
    {
        name: "Slovenia",
        code: "SI",
        flag: "/icons/slovenia.svg",
        dialCode: "+386",
    },
    {
        name: "Lithuania",
        code: "LT",
        flag: "/icons/lithuania.svg",
        dialCode: "+370",
    },
] as const;

export function ApplyForm() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const leadSource = searchParams.get("lead");
    const leadSubSource = searchParams.get("leadSubSource");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedDialCode, setSelectedDialCode] = useState<string>(
        COUNTRY_OPTIONS[0].dialCode,
    ); // ✅ Explicitly set as string
    const router = useRouter();

    const [errors, setErrors] = useState({
        firstName: "",
        phoneNumber: "",
        email: "",
        destination: "",
        courses: "",
        intakes: "",
    });

    const validateForm = (values: CreateLeadDTO) => {
        const validationErrors = { ...errors };

        // First Name Validation (Minimum 3 Characters)
        if (values.firstName.length < 3) {
            validationErrors.firstName =
                "First name must be at least 3 characters long";
        }

        // Last Name - No validation needed

        // Phone Number Validation (Must be 10 Digits)
        const phonePattern = /^\d{10}$/;
        const phoneWithoutDialCode = values.phone
            .replace(/^\+\d+\s*/, "")
            .replaceAll(/[-\s]/g, "");

        if (!phonePattern.test(phoneWithoutDialCode)) {
            validationErrors.phoneNumber =
                "Please enter a valid 10-digit phone number";
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;
        if (!emailPattern.test(values.email)) {
            validationErrors.email = "Invalid email address";
        }

        // Destination Validation (Must Select One)
        if (!values.destination) {
            validationErrors.destination = "Please select a destination";
        }

        // Courses Validation (User Must Enter a Course)
        if (!values.courses.trim()) {
            validationErrors.courses = "Please enter a course";
        }

        // Intakes Validation (User Must Select One from Dropdown)
        if (!values.intakes) {
            validationErrors.intakes = "Please select an intake date";
        }

        return validationErrors;
    };

    // eslint-disable-next-line unicorn/prevent-abbreviations
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        console.log(formData);
        const values: CreateLeadDTO = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
            phone: `${selectedDialCode} ${formData.get("phoneNumber") as string}`,
            destination: formData.get("destination") as string,
            courses: formData.get("courses") as string,
            callOn: formData.get("callOn") as string,
            intakes: formData.get("intakes") as string,
            leadSource: leadSource
                ? (leadSource as CreateLeadDTO["leadSource"])
                : "Google Ad",
            leadSubSource: leadSubSource
                ? (leadSubSource as CreateLeadDTO["leadSubSource"])
                : "Search Ad",
        };

        //  Reset errors based on updated fields
        setErrors({
            firstName: "",
            phoneNumber: "",
            email: "",
            destination: "",
            courses: "",
            intakes: "",
        });

        const validationErrors = validateForm(values);
        if (Object.values(validationErrors).some((error) => error !== "")) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            await createLead(values, pathname);
            router.push("/thankyou");
        } catch (error) {
            console.error("Lead creation failed", error);
            toast.error("Lead creation failed");
            setIsSubmitting(false);
        }
    };
    return (
        <div className="w-full   bg-white rounded-lg lg:p-2 shadow-[0px_1px_7px_1px_#00000017] ">
            <div className="block px-5 py-4 md:px-2 ">
                <h3 className="mb-6 text-black text-center text-2xl font-semibold">
                    Get in touch
                </h3>
                <form onSubmit={handleSubmit} className="mb-5 space-y-4">
                    <div className="grid  md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-700"
                            >
                                First name
                            </label>
                            <Input
                                type="text"
                                name="firstName"
                                className="h-12 border border-gray-300 rounded-lg px-4 shadow-sm focus:ring-2 focus:ring-teal-500"
                                placeholder="First Name"
                                required
                                aria-label="firstName"
                            />
                            {errors.firstName && (
                                <p className="text-sm text-red-500">
                                    {errors.firstName}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-700"
                            >
                                Last name
                            </label>
                            <Input
                                type="text"
                                name="lastName"
                                className="h-12 border border-gray-300 rounded-lg px-4 shadow-sm focus:ring-2 focus:ring-teal-500"
                                placeholder="Last Name"
                                required
                                aria-label="lastName"
                            />
                        </div>
                    </div>

                    <div className="grid  md:grid-cols-2 gap-2">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <Input
                                type="Email"
                                name="email"
                                className="h-12 border border-gray-300 rounded-xl px-4 shadow-sm focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your Email"
                                required
                                aria-label="email"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="phone"
                                className="text-sm font-medium text-gray-700"
                            >
                                Phone number
                            </label>
                            <div className="flex items-center gap-1">
                                {/* Country Code Select */}
                                <Select
                                    value={selectedDialCode}
                                    onValueChange={setSelectedDialCode}
                                >
                                    <SelectTrigger className="h-12 w-[95px] rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-teal-500 cursor-pointer">
                                        <SelectValue>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={
                                                        COUNTRY_OPTIONS.find(
                                                            (c) =>
                                                                c.dialCode ===
                                                                selectedDialCode,
                                                        )?.flag ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={
                                                        COUNTRY_OPTIONS.find(
                                                            (c) =>
                                                                c.dialCode ===
                                                                selectedDialCode,
                                                        )?.name || "Country"
                                                    }
                                                    width={20}
                                                    height={15}
                                                    className="size-5  md:size-6 rounded-full object-cover"
                                                />
                                                <span className="font-medium text-gray-700">
                                                    {selectedDialCode}
                                                </span>
                                            </div>
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-black border border-gray-300 shadow-md cursor-pointer">
                                        {COUNTRY_OPTIONS.map((country) => (
                                            <SelectItem
                                                key={country.code}
                                                value={country.dialCode}
                                                className="cursor-pointer text-black"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Image
                                                        src={country.flag}
                                                        alt={country.name}
                                                        width={20}
                                                        height={15}
                                                        className="size-6 rounded-full object-cover"
                                                    />
                                                    <span className="font-medium">
                                                        {country.dialCode}
                                                    </span>
                                                    <span className="text-sm text-gray-500">
                                                        ({country.name})
                                                    </span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {/* Phone Number Input */}
                                <Input
                                    type="tel"
                                    name="phoneNumber"
                                    className="h-12 flex-1 rounded-xl border text-black border-gray-300 px-4 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500"
                                    placeholder="Enter your phone number"
                                    required
                                    aria-label="Phone Number"
                                />
                                {errors.phoneNumber && (
                                    <p className="text-sm text-red-500">
                                        {errors.phoneNumber}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid  md:grid-cols-2 gap-2">
                        <div className="space-y-2">
                            <label
                                htmlFor="courses"
                                className="text-sm font-medium text-gray-700"
                            >
                                Destination
                            </label>
                            <Select name="destination" required>
                                <SelectTrigger className="h-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                                    <SelectValue placeholder="Select your Destination" />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-black border border-gray-300 shadow-md">
                                    {COUNTRY_OPTIONS.map((country) => (
                                        <SelectItem
                                            key={country.code}
                                            value={country.code}
                                            className="text-black"
                                        >
                                            {country.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.destination && (
                                <p className="text-sm text-red-500">
                                    {errors.destination}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-700"
                            >
                                Course
                            </label>
                            <Input
                                type="text"
                                name="courses"
                                className="h-12 border border-gray-300 rounded-lg px-4 shadow-sm focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your course"
                                required
                                aria-label="courses"
                            />
                            {errors.courses && (
                                <p className="text-sm text-red-500">
                                    {errors.courses}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid  md:grid-cols-2 gap-2">
                        <div className="space-y-2">
                            <label
                                htmlFor="qualification"
                                className="text-sm font-medium text-gray-700"
                            >
                                When do you want to study
                            </label>
                            <Select name="intakes" required>
                                <SelectTrigger className="h-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                                    <SelectValue placeholder="Select your date" />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-black border border-gray-300 shadow-md">
                                    {DATE_INTAKES.map((qual) => (
                                        <SelectItem
                                            key={qual.value}
                                            value={qual.value}
                                            className="text-black"
                                        >
                                            {qual.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.intakes && (
                                <p className="text-sm text-red-500">
                                    {errors.intakes}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2 ">
                            <label
                                htmlFor="callOn"
                                className="text-sm font-medium text-gray-700"
                            >
                                When should we call you?
                            </label>
                            <DatePicker
                                onChange={(date) =>
                                    console.log("Selected date:", date)
                                }
                            />
                        </div>
                    </div>

                    <div className="text-sm text-gray-500">
                        By submitting this form, you agree to our{" "}
                        <Link
                            href="/"
                            target="_blank"
                            className="text-teal-600 hover:underline"
                        >
                            T&C
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/"
                            target="_blank"
                            className="text-teal-600 hover:underline"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        variant="default"
                        className="w-full rounded-lg py-5"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </div>
        </div>
    );
}

// export function ApplyBottomForm() {
//     const searchParams = useSearchParams();
//     const leadSource = searchParams.get("lead");
//     const leadSubSource = searchParams.get("leadSubSource");
//     const router = useRouter();
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const pathname = usePathname();
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [interestedCourse, setInterestedCourse] =
//         useState<CreateLeadDTO["interestedCourse"]>("CA");
//     const [selectedDialCode, setSelectedDialCode] = useState<string>(
//         COUNTRY_OPTIONS[0].dialCode,
//     ); // ✅ Explicitly set as string
//     //   const [latestQualification, setLatestQualification] = useState<CreateLeadDTO['latestQualification']>('Plus One');

//     // eslint-disable-next-line unicorn/prevent-abbreviations
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         const formData = new FormData(e.currentTarget);

//         const values: CreateLeadDTO = {
//             name: formData.get("name") as string,
//             phone: `${selectedDialCode} ${formData.get("phoneNumber") as string}`, // ✅ Ensure name matches form input// ✅ Combine dial code + phone number
//             interestedCourse: formData.get(
//                 "interestedCourse",
//             ) as CreateLeadDTO["interestedCourse"],
//             latestQualification: formData.get(
//                 "latestQualification",
//             ) as CreateLeadDTO["latestQualification"],
//             leadSource: leadSource
//                 ? (leadSource as CreateLeadDTO["leadSource"])
//                 : "Google Ad",
//             leadSubSource: leadSubSource
//                 ? (leadSubSource as CreateLeadDTO["leadSubSource"])
//                 : "Search Ad",
//         };
//         try {
//             const isResponse = await createLead(values, pathname);
//             if (isResponse) {
//                 setIsSubmitting(false);
//                 setName("");
//                 setPhone("");
//                 setInterestedCourse("CA");
//                 // setLatestQualification('Plus One');
//                 toast.success(
//                     "Thank you! Our Sales Executive will be connecting with you soon :)",
//                 );
//                 router.push("/thankyou");
//                 setIsSubmitted(true);
//             }
//         } catch (error) {
//             console.error("Lead creation failed", error);
//             setIsSubmitting(false);
//         }
//     };

//     if (isSubmitted) {
//         return;
//     }
//     return (
//         <div className="w-full">
//             {/* Desktop view shows horizontal compact form */}
//             <div className="bg-white hidden py-7 md:block">
//                 <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-wrap items-center justify-center gap-5"
//                 >
//                     <Input
//                         type="text"
//                         placeholder="Enter your Name"
//                         required
//                         name="name"
//                         className="h-10 w-[150px] rounded-md text-black"
//                         value={name}
//                         onChange={(event) => setName(event.target.value)}
//                     />

//                     <div className="flex items-center ">
//                         {/* Country Code Select */}
//                         <Select
//                             value={selectedDialCode}
//                             onValueChange={(value) =>
//                                 setSelectedDialCode(value)
//                             }
//                         >
//                             <SelectTrigger className="flex h-10 w-[100px] items-center justify-start rounded-l-md border  border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500">
//                                 <SelectValue>
//                                     <div className="flex items-center justify-start gap-1">
//                                         <Image
//                                             src={
//                                                 COUNTRY_OPTIONS.find(
//                                                     (c) =>
//                                                         c.dialCode ===
//                                                         selectedDialCode,
//                                                 )?.flag || "/placeholder.svg"
//                                             }
//                                             alt={
//                                                 COUNTRY_OPTIONS.find(
//                                                     (c) =>
//                                                         c.dialCode ===
//                                                         selectedDialCode,
//                                                 )?.name || "Country"
//                                             }
//                                             width={20}
//                                             height={15}
//                                             className="size-4 rounded-full object-cover"
//                                         />
//                                         <span className="font-medium text-gray-700">
//                                             {selectedDialCode}
//                                         </span>
//                                     </div>
//                                 </SelectValue>
//                             </SelectTrigger>
//                             <SelectContent>
//                                 {COUNTRY_OPTIONS.map((country) => (
//                                     <SelectItem
//                                         key={country.code}
//                                         value={country.dialCode}
//                                         className="cursor-pointer"
//                                     >
//                                         <div className="flex items-center gap-2">
//                                             <Image
//                                                 src={country.flag}
//                                                 alt={country.name}
//                                                 width={20}
//                                                 height={15}
//                                                 className="size-6 rounded-full object-cover"
//                                             />

//                                             <span className="font-medium">
//                                                 {country.dialCode}
//                                             </span>
//                                             <span className="text-sm text-gray-500">
//                                                 ({country.name})
//                                             </span>
//                                         </div>
//                                     </SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>

//                         {/* Phone Number Input */}
//                         <Input
//                             type="tel"
//                             name="phoneNum"
//                             className="h-10 flex-1 rounded-r-md border border-gray-300 bg-white px-4 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your phone number"
//                             required
//                             value={phone}
//                             onChange={(event) => setPhone(event.target.value)} // ✅ Ensure phone number is stored in state
//                             aria-label="Phone Number"
//                         />
//                     </div>
//                     <Select
//                         name="interestedCourse"
//                         required
//                         value={interestedCourse}
//                         onValueChange={(value) =>
//                             setInterestedCourse(
//                                 value as CreateLeadDTO["interestedCourse"],
//                             )
//                         }
//                     >
//                         <SelectTrigger className="h-10 w-[200px] rounded-md bg-white">
//                             <SelectValue placeholder="Select your course" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             {COUNTRY_OPTIONS.map((country) => (
//                                 <SelectItem
//                                     key={country.code}
//                                     value={country.code}
//                                 >
//                                     {country.name}
//                                 </SelectItem>
//                             ))}
//                         </SelectContent>
//                     </Select>
//                     <Select name="latestQualification" required>
//                         <SelectTrigger className="h-10 w-[250px] rounded-md bg-white shadow-none">
//                             <SelectValue placeholder="Select your qualification" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             {DATE_INTAKES.map((qual) => (
//                                 <SelectItem key={qual.value} value={qual.value}>
//                                     {qual.label}
//                                 </SelectItem>
//                             ))}
//                         </SelectContent>
//                     </Select>
//                     <Button
//                         type="submit"
//                         className="bg-teal-600 hover:bg-teal-700/90"
//                         disabled={isSubmitting}
//                     >
//                         {isSubmitting ? "Applying..." : "Apply Now"}
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// }
