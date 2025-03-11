"use client";

import { useState } from "react";
import { Play } from "lucide-react"; // Ensure you have lucide-react installed

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "GjxKSyOnoRk"; //  YouTube video ID

    // YouTube thumbnail
    const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h2 className="text-4xl font-bold">
                            <span className="text-teal-600">Inspiring</span>{" "}
                            Stories
                        </h2>
                        <p className="text-gray-600 md:w-sm">
                            Watch videos of people sharing their journeys and
                            how our programs helped shape their success.
                        </p>
                    </div>

                    {/* Video Section */}
                    <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        {!isPlaying ? (
                            // Thumbnail with Play Button
                            <div className="relative w-full h-full">
                                <img
                                    src={fallbackThumbnail}
                                    alt="Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 flex items-center justify-center"
                                    aria-label="Play video"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border-2 border-white hover:bg-black/60 transition-colors">
                                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                    </div>
                                </button>
                            </div>
                        ) : (
                            // YouTube Iframe
                            <div className="relative w-full h-full">
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
                                    title="Westmount Study Abroad"
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
