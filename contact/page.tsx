import Questions from "@/components/main/any-questions";
import DestinationSelector from "@/components/main/choose-destination";
import ContactForm from "@/components/main/contact-us";
import LocateUs from "@/components/main/contact/contact-us";
import CustomCarousel from "@/components/main/contact/custom-carousel";
import StayConnected from "@/components/main/contact/stay-connected";
import Footer from "@/components/main/footer";

export default function contactPage() {
    return (
        <main className="bg-[#F8FCFF]">
            <ContactForm />
            <LocateUs />
            {/* <CustomCarousel /> */}
            <DestinationSelector />
            <StayConnected />
            <Questions />
            <Footer />
        </main>
    );
}
