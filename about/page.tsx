import FoundersSection from "@/components/main/about/founders";
import WestmountAbout from "@/components/main/about/hero";
import OurStorySection from "@/components/main/about/story";
import Westmountinfo from "@/components/main/about/west-mount-info";
import Questions from "@/components/main/any-questions";
import WhyChooseUs from "@/components/main/choose-us";
import ContactForm from "@/components/main/contact-us";
import Counter from "@/components/main/counter";
import StudyAbroadPage from "@/components/main/dreaming-study";
import ServicesSection from "@/components/main/explore-services";
import Footer from "@/components/main/footer";

const stats = [
    { count: 32, label: "Countries" },
    { count: 800, label: "Universities" },
    { count: 99.9, label: "Visa Success Rate" },
];

export default function AboutPage() {
    return (
        <main className="space-y-10 bg-[#F8FCFF] ">
            <WestmountAbout />
            <Counter stats={stats} />
            <OurStorySection />
            <Westmountinfo />
            <FoundersSection />
            <ServicesSection />
            <WhyChooseUs />
            <ContactForm />
            <StudyAbroadPage />
            <Questions />
            <Footer />
        </main>
    );
}
