import HeroSection from "@/components/home/hero";
import ServicesSection from "@/components/home/services";
import { AboutSection } from "@/components/home/about";
import { WhyChooseSection } from "@/components/home/why-choose-us";
import More from "@/components/home/more";
import { PopularHealthPackages } from "@/components/home/test"; // corrected import
import FrequentlyBooked from "@/components/home/popularTest";
// import TeamSection from "@/components/home/team";
// import HomeCollection from "@/components/home/homeCollection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <More />
      <FrequentlyBooked/>
      <WhyChooseSection />
      <PopularHealthPackages />
      <ServicesSection />
      <AboutSection />
      {/* <HomeCollection/> */}
      {/* <TeamSection/> */}
    
    
     
    
     
    </div>
  );
}
