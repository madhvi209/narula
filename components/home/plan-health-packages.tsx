import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HealthPackageCard from "../cards/healthPackageCard"; // Make sure this component exists and is correctly implemented

const healthPackages = [
    {
        ageGroup: "Up to 30 Years",
        ageGroupHindi: "30 वर्ष की आयु तक",
        category: "Category 1",
        normalPrice: 4080,
        discountedPrice: 3250,
        tests: [
            "Consultation & Check-up (By Post-graduate MD Doctors Only)",
            "Complete Haemogram (22 Parameters)",
            "Complete Urine Test",
            "Blood Group",
            "Blood Glucose (Fasting & PP)",
            "Blood Urea & Serum Creatinine",
            "Lipid Profile",
            "SGOT & SGPT",
            "Ultrasound Whole Abdomen (Coloured)",
            "Chest X-Ray (Digital)",
            "E.C.G.",
            "Thyroid Profile (T3, T4, TSH)",
            "Digital O.P.G. (For Dental Status)",
        ],
    },
    {
        ageGroup: "31-50 Years",
        ageGroupHindi: "31-50 वर्ष की आयु तक",
        category: "Category 2",
        normalPrice: 5050,
        discountedPrice: 4000,
        tests: [
            "Consultation & Check-up (By Post-graduate MD Doctors Only)",
            "Complete Haemogram (22 Parameters)",
            "Complete Urine Test",
            "Blood Group",
            "Blood Glucose (Fasting & PP)",
            "Renal Profile (Urea, Creatinine, Uric Acid, Ca, P, Na & K)",
            "Liver Function Test (Complete)",
            "Lipid Profile",
            "Ultrasound Whole Abdomen (Coloured)",
            "Chest X-Ray (Digital)",
            "E.C.G.",
            "Thyroid Profile (T3, T4, TSH)",
            "Digital O.P.G. (For Dental Status)",
        ],
    },
    {
        ageGroup: "Above 50 Years",
        ageGroupHindi: "50 वर्ष से अधिक आयु वर्ग",
        category: "Category 3",
        normalPrice: 7150,
        discountedPrice: 5700,
        tests: [
            "Consultation & Check-up (By Post-graduate MD Doctors Only)",
            "Complete Haemogram (22 Parameters)",
            "Complete Urine Test & Stool Test",
            "Blood Group",
            "Blood Glucose (Fasting & PP)",
            "B.M.D. (Dexa) Spine",
            "Renal Profile (Complete)",
            "Liver Function Test (Complete)",
            "Lipid Profile",
            "P.S.A. (Only for Male)",
            "Pap Smear for Cervical Cancer (Only for Female)",
            "Ultrasound Whole Abdomen (Coloured)",
            "Chest X-Ray (Digital)",
            "E.C.G.",
            "Thyroid Profile (T3, T4, TSH)",
            "Digital O.P.G. (For Dental Status)",
        ],
    },
];

const PlanHealthPackagesSection = () => (
  <>
    {/* Health Packages Section */}
    <section id="tests" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
           Diagnostics Plan
          <span className="text-[#00A5D4]"> Health Package </span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto">
          नरूला डायग्नोस्टिक सैंटर पर सभी आयु वर्ग के व्यक्तियों के लिए हैल्थ चैक-अप स्कीम उपलब्ध हैं
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {healthPackages.map((pkg, index) => (
            <HealthPackageCard key={index} {...pkg} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2">
            See All Packages
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default PlanHealthPackagesSection;