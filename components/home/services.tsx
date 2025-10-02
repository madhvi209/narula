import { CheckCircle } from "lucide-react";
import ServiceCard from "../cards/serviceCard"; // Make sure this component exists and is correctly implemented
import radiologyImage from "@/public/images/radiology.jpg";
import pathologyImage from "@/public/images/pathology.jpg";
import nuclearImage from "@/public/images/nuclear.jpg";
import ultrasoundImage from "@/public/images/ultrasound.jpg";

// Fix: Pass image.src (string) instead of the imported object
const services = [
  {
    title: "Radiology",
    description:
      "Advanced imaging services including X-Ray, CT Scan, and MRI with state-of-the-art equipment.",
    image: radiologyImage.src,
  },
  {
    title: "Pathology",
    description:
      "Comprehensive laboratory testing with NABL certified robotic lab and molecular diagnostics.",
    image: pathologyImage.src,
  },
  {
    title: "Nuclear Imaging & Therapy",
    description:
      "128 Slice PET-CT scanning with latest Lyso Crystal technology for precise diagnosis.",
    image: nuclearImage.src,
  },
  {
    title: "Ultrasound & Fetal Medicine",
    description:
      "Advanced fetal scanning, genetics, and comprehensive ultrasound services.",
    image: ultrasoundImage.src,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our  
            <span className="text-[#00A5D4]"> Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive diagnostic services with state-of-the-art technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {[
            "Neuro Imaging",
            "Chest Imaging",
            "Whole Body Angiography",
            "CT Coronary / Heart Angiogram",
            "Abdominal Gastrointestinal Imaging",
            "Musculoskeletal Imaging",
            "Cardiology Lab (Echo, TMT, Stress echo, ECG)",
            "Hematology And Generics",
            "Onco / Cancer Imaging & Pathology",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 animate-fade-in">
              <CheckCircle className="h-5 w-5 text-[#00A5D4] flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}