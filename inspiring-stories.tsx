"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    // Using a stock YouTube video about studying in Ireland
    const videoId = "Ys7ma4IzXDk"; // Study in Ireland promotional video

    // Fallback thumbnail if custom image isn't available
    const thumbnailUrl = "/images/thumbnail.jpg"; // Your custom thumbnail
    const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // YouTube thumbnail fallback

    return (
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className=" space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h2 className="text-4xl font-bold">
                            <span className="text-teal-600">Inspiring</span>{" "}
                            Stories
                        </h2>
                        <p className="text-gray-600  md:w-sm">
                            Watch videos of people sharing their journeys and
                            how our programs helped shape their success.
                        </p>
                    </div>

                    <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        {!isPlaying ? (
                            // Thumbnail with play button
                            <div className="relative w-full h-full">
                                <img
                                    src={thumbnailUrl || "/placeholder.svg"} // Using YouTube thumbnail as fallback
                                    alt="8 Reasons to Study in Ireland"
                                    className="w-full h-full object-fit"
                                />
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 flex items-center justify-center"
                                    aria-label="Play video"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm border-2 border-white hover:bg-white/40 transition-colors">
                                        <Play
                                            className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                                            fill="white"
                                        />
                                    </div>
                                </button>
                                <div className="absolute inset-0 bg-black/10" />{" "}
                            </div>
                        ) : (
                            // YouTube iframe
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title="8 Reasons to Study in Ireland"
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
