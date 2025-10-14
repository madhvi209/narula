import HeroSection from "@/components/home/hero";
import ServicesSection from "@/components/home/services";
import { AboutSection } from "@/components/home/about";
import { WhyChooseSection } from "@/components/home/why-choose-us";
import More from "@/components/home/more";
import { PopularHealthPackages } from "@/components/home/healthPackage"; // corrected import
import FrequentlyBooked from "@/components/home/popularTest";
import TeamSection from "@/components/home/team";
import HomeCollection from "@/components/home/homeCollection";
import HitechEquipments from "@/components/home/hightTech"
import TestimonialsSection from "@/components/home/testimonials";
import HealthConcernsSection from "@/components/home/health-concern";
import ContactClientPage from "@/components/home/conatct";
import MriCtSection from "@/components/home/mriCt";
import Gallery from "@/components/home/gallery";
import CertificationsSection from "@/components/home/certifications";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <More />
      <FrequentlyBooked />
      <WhyChooseSection />
      <PopularHealthPackages />
      <ServicesSection />
      <AboutSection />
      <HomeCollection />
      <TeamSection />
      <HealthConcernsSection />
      <HitechEquipments />
      <Gallery/>
      <TestimonialsSection />
      <MriCtSection />
      <CertificationsSection/>
      <ContactClientPage />


    </div>
  );
}
