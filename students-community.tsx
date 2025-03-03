"use client";

import Image from "next/image";

const students = [
    { src: "/icons/profile-img1.png", alt: "Student 1" },
    { src: "/icons/profile-img.png", alt: "Student 2" },
    { src: "/icons/profile-img2.png", alt: "Student 3" },
];

export default function StudentAvatars() {
    return (
        <div className="flex items-center gap-8 ">
            <div className="flex -space-x-2">
                {students.map((student, index) => (
                    <div
                        key={index}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                        <Image
                            src={student.src}
                            width={40}
                            height={40}
                            alt={student.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <span className="text-gray-700">1M+ students in our community</span>
        </div>
    );
}
