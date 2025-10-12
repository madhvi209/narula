import React from "react";

export default function MriCtSection() {
    return (
        <section className="py-20 mt-10 mb-18">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3 text-gray-800">
                        India’s First <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(to right, #3398ee, #74cef7, #002653)`
                            }}
                        >
                            Advanced MRI &amp; PET-CT Experience
                        </span>
                    </h2>
                    <p className="text-[#0399D1] font-semibold mb-2">Because our patients are our top priority.</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-[#0399D1]">
                        <span>#RedefiningMRI | #OurPatientsComeFirst</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="aspect-video rounded-md overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/wdDZ0juMT5A"
                            title="Narula MRI Technology"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="aspect-video rounded-md overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/J1xfWT97fkQ"
                            title="Narula PET CT Facility"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
