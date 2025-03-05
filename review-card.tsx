import Image from "next/image";

interface ReviewCardProps {
    name: string;
    image: string;
    review: string;
}

export function ReviewCard({ name, image, review }: ReviewCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.1)] flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-2">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-gray-500">a year ago</p>
                </div>
                <div className="ml-auto">
                    <Image
                        src="/icons/google-icon.png"
                        alt="google"
                        width={200}
                        height={200}
                        className="w-5 h-5"
                    />
                </div>
            </div>
            <div className="flex mb-2">
                <Image
                    src="/icons/stars.jpg"
                    alt="stars"
                    width={70}
                    height={70}
                />
            </div>
            <p className="text-gray-700 text-sm">{review}</p>
        </div>
    );
}
