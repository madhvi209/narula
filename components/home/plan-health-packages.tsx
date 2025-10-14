"use client"

import { TestTube, Droplet, Heart, Activity, Stethoscope, Scan, Wind, Shield, ShoppingCart } from "lucide-react"
import { AddToCartButton } from "../ui/add-to-cart-button"

const PRIMARY_COLOR = "#00A5D4"; // Tailwind cyan-500
//bg - [#00A5D4] hover: bg - [#0090b8] text - white

type HealthPackage = {
  category: string
  ageRange: string
  consultation: string
  leftTests: { name: string; detail: string; icon: any }[]
  rightTests: { name: string; detail: string; icon: any }[]
  normalPrice: number
  discountedPrice: number
  gradient: string
}

const packages: HealthPackage[] = [
  {
    category: "Category 1",
    ageRange: "Up to 30 Years",
    consultation: "Consultation & Check-up (By Post-graduate MD Doctors Only)",
    leftTests: [
      { name: "Complete Haemogram", detail: "(22 Parameters)", icon: TestTube },
      { name: "Complete Urine Test", detail: "", icon: Droplet },
      { name: "Blood Group", detail: "", icon: Activity },
      { name: "Blood Glucose", detail: "(Fasting & PP)", icon: Droplet },
      { name: "Blood Urea & Serum Creatinine", detail: "Lipid Profile", icon: Heart },
      { name: "SGOT & SGPT", detail: "", icon: Activity },
    ],
    rightTests: [
      { name: "Ultrasound Whole Abdomen", detail: "(Coloured)", icon: Scan },
      { name: "Chest X-Ray", detail: "(Digital)", icon: Wind },
      { name: "E.C.G.", detail: "", icon: Activity },
      { name: "Thyroid Profile", detail: "(T3, T4, TSH)", icon: Shield },
      { name: "Digital O.P.G.", detail: "(For Dental Status)", icon: Scan },
    ],
    normalPrice: 2999,
    discountedPrice: 1999,
    gradient: "from-cyan-400/20 via-teal-400/20 to-blue-400/20",
  },
  {
    category: "Category 2",
    ageRange: "31 to 50 Years",
    consultation: "Consultation & Check-up (By Post-graduate MD Doctors Only)",
    leftTests: [
      { name: "Complete Haemogram", detail: "(22 Parameters)", icon: TestTube },
      { name: "Complete Urine Test", detail: "", icon: Droplet },
      { name: "Blood Group", detail: "", icon: Activity },
      { name: "Blood Glucose", detail: "(Fasting & PP)", icon: Droplet },
      { name: "Renal Profile", detail: "(Urea, Creatinine, etc.)", icon: Heart },
      { name: "Liver Function Test", detail: "", icon: Activity },
    ],
    rightTests: [
      { name: "Lipid Profile", detail: "", icon: Heart },
      { name: "Ultrasound Whole Abdomen", detail: "(Coloured)", icon: Scan },
      { name: "Chest X-Ray", detail: "(Digital)", icon: Wind },
      { name: "E.C.G.", detail: "", icon: Activity },
      { name: "Thyroid Profile", detail: "(T3, T4, TSH)", icon: Shield },
      { name: "Digital O.P.G.", detail: "(For Dental Status)", icon: Scan },
    ],
    normalPrice: 3999,
    discountedPrice: 2499,
    gradient: "from-blue-400/20 via-indigo-400/20 to-purple-400/20",
  },
]

export default function HealthPackagesSection() {

  return (
    <section className="py-20 relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Healthy 
            <span className="bg-gradient-to-r from-[#00A5D4] via-[#0d2c42] to-[#1f5860] bg-clip-text text-transparent"> Life Packages
            </span></h2>
          <p className="text-xl text-cyan-400">
            नरूला डायग्नोस्टिक सैंटर पर सभी आयु वर्ग के व्यक्तियों के लिए हैल्थ चैक-अप स्कीम उपलब्ध हैं
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${pkg.gradient} backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]`}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Stethoscope className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{pkg.category}</h3>
                      <p className="text-3xl font-bold text-cyan-500 mt-1">{pkg.ageRange}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">{pkg.consultation}</p>
                </div>

                {/* Two column test list */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Left column */}
                  <div className="space-y-4">
                    {pkg.leftTests.map((test, testIndex) => {
                      const Icon = test.icon
                      return (
                        <div key={testIndex} className="flex items-start gap-2">
                          <Icon className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white leading-tight">
                              {test.name}
                            </p>
                            {test.detail && <p className="text-xs text-slate-600 dark:text-slate-400">{test.detail}</p>}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Vertical divider */}
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
                    <div className="pl-6 space-y-4">
                      {pkg.rightTests.map((test, testIndex) => {
                        const Icon = test.icon
                        return (
                          <div key={testIndex} className="flex items-start gap-2">
                            <Icon className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-slate-900 dark:text-white leading-tight">
                                {test.name}
                              </p>
                              {test.detail && (
                                <p className="text-xs text-slate-600 dark:text-slate-400">{test.detail}</p>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="border-t pt-3 sm:pt-4 mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">Normal Charges</span>
                    <span className="text-sm sm:text-lg line-through text-muted-foreground">
                      ₹{pkg.normalPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm font-semibold text-foreground">Concessional Charges</span>
                    <span
                      className="text-xl sm:text-2xl font-bold"
                      style={{ color: PRIMARY_COLOR }}
                    >
                      ₹{pkg.discountedPrice}
                    </span>
                  </div>
                  <AddToCartButton
                    item={{
                      type: 'health-package',
                      title: `${pkg.category} (${pkg.ageRange})`,
                      description: pkg.consultation,
                      category: 'Health Package',
                      normalPrice: pkg.normalPrice,
                      discountedPrice: pkg.discountedPrice,
                      tests: [...pkg.leftTests.map(t => t.name), ...pkg.rightTests.map(t => t.name)],
                      testsCount: pkg.leftTests.length + pkg.rightTests.length,
                      ageGroup: pkg.ageRange
                    }}
                    variant="test-card"
                    className="w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base"
                  >
                    <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Add to Cart
                  </AddToCartButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
