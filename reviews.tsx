import Image from "next/image";
import { ReviewCard } from "./review-card";
import { Button } from "../ui/button";
import { ApplyDialogForm } from "./apply-dialog-form";

const reviews = [
    {
        name: "Mohammed Salih",
        image: "/images/review-img1.jpg",
        review: "I have attended my CA inter class in tripiei. The classes are very good the main highlight is the faculty pool, they also provides recording of session that is very helpful for students and infrastructure is also main highlight",
    },
    {
        name: "Megha Meghz",
        image: "/images/review-img2.jpg",
        review: "Tripiei is the best institution, providing all type of support to its students. The faculties are its main attraction. At any time, we are free to ask any doubts without fear. It's the greatest choice for people who want to",
    },
    {
        name: "Nikhila G Nair",
        image: "/images/review-img3.jpg",
        review: "As a student of triple i commerce, i felt From my personal experience i can tell its the best institute to learn. All the teachers are great, they even listen to your queries and the best part is they don't get irritate.And also the office staff are very",
    },
    {
        name: "Archana Achu",
        image: "/images/review-img4.jpg",
        review: "Doing my CMA here. The best institute ever experienced and extremely happy for choosing this with a very supportive faculties and mentors, satisfied with the infrastructure and classrooms. They are also helpful for the students by providing",
    },
    {
        name: "Sivapriya S",
        image: "/images/review-img5.jpg",
        review: "As a CMA student here, i have a good experience.The institution provides good and friendly faculties. And the coordinators are also so supportive. Triple i is one of the best institution in Kochi.",
    },
    {
        name: "Tejus Jose",
        image: "/images/review-img6.jpg",
        review: "As a student of Triple i Academy, i felt, it was systematic,keen classes, with well charted schedule to meet the students need. Their faculty are superb and is adamant on clearing the doubts one has on approaching them. So the guidance of",
    },
];

export default function TestimonialsReview() {
    return (
        <div className="max-w-7xl  py-12 px-4 sm:px-6 mx-auto">
            <div className="max-w-7xl mx-auto">
                {/* Grid of reviews */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>

                {/* Google Rating */}
                <div className="mt-12 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/icons/google-icon.png"
                            alt="Google"
                            width={40}
                            height={40}
                            className="w-12 h-12 md:w-14 md:h-14"
                        />
                        <div>
                            <p className="font-medium  md:text-lg">
                                Google Rating
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold">5.0</span>
                                <div className="flex">
                                    <Image
                                        src="/icons/stars.jpg"
                                        alt="stars"
                                        width={100}
                                        height={100}
                                        className=" w-24 h-5 md:h-full md:w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ApplyDialogForm>
                        <Button className="px-6 py-2 bg-[#005B5B] text-white font-medium rounded flex items-center gap-2 hover:bg-teal-700 transition-colors">
                            Start Your Journey Today
                        </Button>
                    </ApplyDialogForm>
                    s
                </div>
            </div>
        </div>
    );
}
