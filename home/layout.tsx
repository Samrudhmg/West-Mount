import Questions from "@/components/main/any-questions";
import DestinationSelector from "@/components/main/choose-destination";
import WhyChooseUs from "@/components/main/choose-us";
import Counter from "@/components/main/counter";
import StudyAbroadPage from "@/components/main/dreaming-study";
import ServicesSection from "@/components/main/explore-services";
import Footer from "@/components/main/footer";
import Hero from "@/components/main/hero-section";
import StudyAbroadLanding from "@/components/main/info-visa";
import PartnerUniversities from "@/components/main/partner-universities";
import { SuccessStories } from "@/components/main/success-stories";
import ContactForm from "../contact-us";

const stats = [
    { count: 32, label: "Countries" },
    { count: 800, label: "Universities" },
    { count: 99.9, label: "Visa Success Rate" },
];

export default function Layout() {
    return (
        <div
            className="bg-gradient-to-b from-[#F8FCFF] to-[#F8FFFF]
         space-y-10"
        >
            <Hero />
            <Counter stats={stats} />
            <DestinationSelector />
            <StudyAbroadLanding />
            <WhyChooseUs />
            <PartnerUniversities />
            <SuccessStories />
            <ServicesSection />
            <ContactForm />
            <StudyAbroadPage />
            <Questions />
            <Footer />
        </div>
    );
}
