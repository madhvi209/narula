import HeroSection from "@/components/home/hero";
import ServicesSection from "@/components/home/services";
import { AboutSection } from "@/components/home/about";
import { WhyChooseSection } from "@/components/home/why-choose-us";
import PlanHealthPackagesSection from "@/components/home/plan-health-packages";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <AboutSection />
      <ServicesSection />
      <WhyChooseSection/>
      <PlanHealthPackagesSection/>
    </div>
  );
}
