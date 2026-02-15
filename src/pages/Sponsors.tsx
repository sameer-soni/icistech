import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  Heart,
  Star,
  CheckCircle,
  Globe,
  Users,
  Target,
  Handshake,
  DollarSign,
  Building,
  X,
} from "lucide-react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const Sponsors = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const benefitsData = [
    {
      icon: Globe,
      title: "Global Exposure",
      description:
        "Highlights your organization's leadership and ensures maximum exposure globally & countrywide",
    },
    {
      icon: Target,
      title: "Enhanced Visibility",
      description:
        "Sponsorship significantly enhances your company's/institute's visibility throughout the event",
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description:
        "Your brand will receive prominent recognition as an official sponsor of ICISTECH 2026",
    },
    {
      icon: Users,
      title: "Target Audience Access",
      description:
        "Gain direct access to influential engineers and researchers in social media, mobile technology, analytics, and computing",
    },
    {
      icon: Building,
      title: "Product Showcase",
      description:
        "Utilize this event to share your company's products and services with important decision makers",
    },
  ];

  const sponsorFeatures = [
    "Name & logo in all announcements and media coverage",
    "Name & Logo on all conference brochures, program guide",
    "Space for banner/standee installation during the event",
    "Acknowledgement by Chair during Welcome, Reception, opening and closing",
    "Name & Logo at prominent places at the Conference venue",
    "Company's Name & Logo at a prominent place on campus",
    "Company/organization website URL",
    "Distribution of sponsor's pamphlet to participants",
    "Product display space",
    "Name and Logo on conference website",
  ];

  const sponsorPackages = [
    {
      name: "Platinum",
      price: "₹1,00,000",
      usdPrice: "$2000",
      color: "from-gray-300 to-gray-100",
      bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
      borderColor: "border-slate-400",
      features: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        "Double Space",
        true,
      ],
      popular: true,
    },
    {
      name: "Gold",
      price: "₹70,000",
      usdPrice: "$1500",
      color: "from-yellow-400 to-yellow-200",
      bgColor: "bg-gradient-to-br from-yellow-800 to-yellow-900",
      borderColor: "border-yellow-400",
      features: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        "Single Space",
        true,
      ],
    },
    {
      name: "Silver",
      price: "₹50,000",
      usdPrice: "$1000",
      color: "from-slate-300 to-slate-100",
      bgColor: "bg-gradient-to-br from-slate-700 to-slate-800",
      borderColor: "border-slate-400",
      features: [
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        "Single Space",
        true,
      ],
    },
    {
      name: "Bronze",
      price: "₹25,000",
      usdPrice: "$750",
      color: "from-orange-400 to-orange-200",
      bgColor: "bg-gradient-to-br from-orange-800 to-orange-900",
      borderColor: "border-orange-400",
      features: [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        "Single Space",
        true,
      ],
    },
  ];

  const additionalSponsors = [
    {
      name: "Food and Refreshments Sponsor",
      price: "₹20,000",
      color: "from-green-400 to-green-200",
    },
    {
      name: "High Tea Sponsor",
      price: "₹10,000",
      color: "from-purple-400 to-purple-200",
    },
  ];

  const exhibitionStalls = [
    { name: "Stall Single Size (One Day)", price: "₹10,000" },
    { name: "Stall Single Size (Two Days)", price: "₹15,000" },
    { name: "Stall Double Size (One Day)", price: "₹15,000" },
    { name: "Stall Double Size (Two Days)", price: "₹20,000" },
  ];

  const whyBecomeSponsor = [
    "ICISTECH 2026, is an international event to present the latest results from the research.",
    "It serves as a dynamic platform where industry leaders and researchers come together to exchange insights, explore emerging technologies, and discuss business opportunities and real-world applications.",
    "Sponsors benefit from enhanced visibility and branding throughout the conference.",
    "As a sponsor, you gain valuable access to key officials from top R&D organizations and influential project stakeholders.",
  ];

  const termsConditions = [
    "Sponsorship packages can be customized to suit your company's preferences.",
    "Due to limited sponsorship opportunities, sponsors shall be allocated on a first-come, first-served basis.",
    "The sponsors shall bring a POP display as desired by them for the display stalls.",
    "All payments for sponsorship/stall bookings are to be made in advance.",
    "All stall requirements shall be made known seven days prior to the event. All additions shall be charged appropriately.",
    "Bromide of the Company's Logo & complete Name of the Company with style will be required for acknowledging through Backdrops, Banners, brochures, stationery, Invitation cards & other promotional material.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <FloatingTopBar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <FloatingSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <div className="ml-0 sm:ml-0 md:ml-0 lg:ml-80 xl:ml-80 mr-4 lg:mr-8 pt-32 pb-12 px-4 lg:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-4"
            >
              Sponsorship Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              ICISTECH-26 Sponsorship
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Join us as a sponsor and showcase your leadership in the industry
              while gaining maximum global exposure
            </motion.p>
          </motion.div>

          {/* Our Sponsors Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-20"
          >
            <div className="text-center mb-10">
              {/* <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/15 border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-medium mb-4"
              >
                <Star className="w-4 h-4" />
                Our Valued Partners
              </motion.div> */}
              <h2 className="text-3xl font-bold text-white mb-3">
                Our Sponsors
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                We are grateful to our sponsors for their generous support in making ICISTECH 2026 a success
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { name: "Nescafé", logo: "/sponsors/nescafe2.jpeg" },
                { name: "Pizza Hut", logo: "/sponsors/pizzaHut2.jpeg" },
                { name: "Red Bull", logo: "/sponsors/redbull.png" },
              ].map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/[0.12] hover:border-white/25 hover:shadow-lg hover:shadow-blue-500/10 w-72 h-64"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-32 max-w-[200px] object-contain mb-4 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="text-white/70 text-sm font-medium tracking-wide group-hover:text-white/90 transition-colors duration-300">
                    {sponsor.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Become a Sponsor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center"
                >
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sponsor Packages Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Compare Sponsor Packages
            </h2>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-5 gap-4">
                  {/* Header */}
                  <div className="col-span-1"></div>
                  {sponsorPackages.map((pkg, index) => (
                    <div
                      key={pkg.name}
                      className={`${pkg.bgColor} ${pkg.borderColor} border-2 rounded-xl p-4 text-center relative`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </span>
                        </div>
                      )}
                      <h3
                        className={`text-xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}
                      >
                        {pkg.name}
                      </h3>
                      <div className="text-white text-lg font-semibold">
                        {pkg.price}
                      </div>
                      <div className="text-white/70 text-sm">
                        {pkg.usdPrice}
                      </div>
                    </div>
                  ))}

                  {/* Features */}
                  {sponsorFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="contents">
                      <div className="py-3 text-white/90 text-sm font-medium border-b border-white/10">
                        {feature}
                      </div>
                      {sponsorPackages.map((pkg, pkgIndex) => (
                        <div
                          key={`${featureIndex}-${pkgIndex}`}
                          className="py-3 text-center border-b border-white/10"
                        >
                          {typeof pkg.features[featureIndex] === "boolean" ? (
                            pkg.features[featureIndex] ? (
                              <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-white/90 text-sm">
                              {pkg.features[featureIndex]}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsorPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className={`${pkg.bgColor} ${pkg.borderColor} border-2 rounded-2xl p-6 relative`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}
                    >
                      {pkg.name}
                    </h3>
                    <div className="text-white text-xl font-semibold">
                      {pkg.price}
                    </div>
                    <div className="text-white/70">{pkg.usdPrice}</div>
                  </div>

                  <div className="space-y-3">
                    {sponsorFeatures.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-between"
                      >
                        <span className="text-white/90 text-sm">{feature}</span>
                        {typeof pkg.features[featureIndex] === "boolean" ? (
                          pkg.features[featureIndex] ? (
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          ) : (
                            <X className="w-5 h-5 text-red-400" />
                          )
                        ) : (
                          <span className="text-white/90 text-sm">
                            {pkg.features[featureIndex]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Sponsors and Exhibition */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Additional Sponsors */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Additional Sponsors
              </h3>
              <div className="space-y-4">
                {additionalSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                  >
                    <span className="text-white/90">{sponsor.name}</span>
                    <span
                      className={`font-semibold bg-gradient-to-r ${sponsor.color} bg-clip-text text-transparent`}
                    >
                      {sponsor.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Exhibition Stalls */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Handshake className="w-8 h-8 text-blue-400" />
                Exhibition Stalls
              </h3>
              <div className="space-y-4">
                {exhibitionStalls.map((stall, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                  >
                    <span className="text-white/90">{stall.name}</span>
                    <span className="text-blue-300 font-semibold">
                      {stall.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Terms & Conditions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                General Terms & Conditions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {termsConditions.map((term, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{term}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
