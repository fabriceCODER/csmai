import Homepage from "@/app/(components)/home";
import PartnersSection from "@/app/(components)/partnerSection/page";
import IntegrationSection from "@/app/(components)/integration/page";
import SecuritySection from "@/app/(components)/security/page";
import TestimonialsSection from "@/app/(components)/testimonial/page";
import CommunitySection from "@/app/(components)/community/page";
import TeamSection from "@/app/(components)/team/page";
import Footer from "@/app/(components)/footer/page";
import FeaturesSection from "@/app/(components)/featureSection/page";
import Navbar from "@/app/(components)/navbar/page";

const ComponentsLayout = () => {
    return(
        <div>
            <Navbar />
            <Homepage />
            <PartnersSection />
            <FeaturesSection />
            <IntegrationSection />
            <SecuritySection />
            <TeamSection />
            <TestimonialsSection />
            <CommunitySection />
            <Footer />
        </div>
    )
}

export default ComponentsLayout