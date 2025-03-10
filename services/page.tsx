import ContactForm from "@/components/main/contact-us";
import Counter from "@/components/main/counter";
import VideoSection from "@/components/main/inspiring-stories";
import TestimonialsReview from "@/components/main/reviews";
import ServiceHero from "@/components/main/services/hero";
import ServicesSection from "@/components/main/services/services-section";
import { SuccessStories } from "@/components/main/success-stories";
import SuccessStoriesSection from "@/components/main/testimonials";
const stats = [
    { count: 32, label: "Countries" },
    { count: 800, label: "Universities" },
    { count: 99.9, label: "Visa Success Rate" },
];

export default function ServicePage() {
    return (
        <main className=" bg-[#F8FCFF]">
            <ServiceHero />
            <Counter stats={stats} />
            <ServicesSection />
            <ContactForm />
            <SuccessStoriesSection />
            <SuccessStories />
            <TestimonialsReview />
            <VideoSection />
        </main>
    );
}
