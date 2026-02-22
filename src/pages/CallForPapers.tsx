import { motion } from "framer-motion";
import { FileText, Users, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const CallForPapers = () => {
  const [expandedSection, setExpandedSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    {
      id: "computer-science",
      title: "Computer Science Engineering",
      icon: "💻",
      color: "from-blue-400 to-purple-500",
      topics: [
        "Big Data Analytics",
        "Software Engineering and Testing",
        "Computational Biology & Bioinformatics",
        "Data Centric Programming",
        "Data Modelling & Semantic Engineering",
        "Data, Text, Web Mining, & Visualization",
        "Domain Specific Data Management",
        "Algorithms & Programming Languages",
        "Computing Architectures and Systems",
        "Software Engineering",
        "Web 3.0 and Blockchain",
        "Quantum Intelligence",
        "Cyber Security",
        "Internet of Things (IoT)",
        "Cluster, Cloud & Grid Computing"
      ],
    },
    {
      id: "material-science",
      title: "Material Science, Electrical & Electronics",
      icon: "⚡",
      color: "from-pink-400 to-purple-500",
      topics: [
        "Electronic devices, materials and fabrication",
        "Device modelling & characterization",
        "Advanced CMOS devices and process",
        "Green Communications",
        "Wireless Communications and Networks",
        "Optical Communications and Networks",
        "Modulation and Coding Techniques",
        "Antennas, Propagation and Computational EM",
        "RF/Millimeter-wave Circuits and Systems",
        "THz, mm Wave and RF Systems for Communications",
        "MEMS and semiconductor sensors",
        "Power Generation, Transmission and Distribution"
      ],
    },
    {
      id: "civil-mechanical",
      title: "Civil, Mechanical and Environment",
      icon: "🏗️",
      color: "from-green-400 to-teal-500",
      topics: [
        "Water and Wastewater Treatment and Hydrology",
        "Air Pollution Control and E-waste Management",
        "Building Retrofitting",
        "Mechatronics & Automation Systems",
        "Robotics and Embedded System",
        "Automobile Engineering",
        "Structural Engineering",
        "Soil Conservation and Soil Restoration",
        "Green Building & Ecosystem",
        "Renewable Energy Sources"
      ],
    },
    {
      id: "applied-interdisciplinary",
      title: "Applied and Interdisciplinary Sciences",
      icon: "🔬",
      color: "from-red-400 to-orange-500",
      topics: [
        "Renewable Energy Sources and Technology",
        "Engineering Physics",
        "Algorithms and Architectures",
        "Pattern Recognition and Object Tracking",
        "Fuzzy Control and Neuro Control",
        "Special Functions",
        "Fractional Calculus",
        "Dimensional Statistics",
        "Environment and Health",
        "Biotechnology and Nature",
        "Material Science Engineering",
        "Biomedical and Health Informatics"
      ],
    },
    // {
    //   id: "management-technology",
    //   title: "Management and Technology",
    //   icon: "📊",
    //   color: "from-yellow-400 to-orange-500",
    //   topics: [
    //     "Technology in Management",
    //     "Behavioural Science",
    //     "International Relations",
    //     "E-Commerce and supply chain",
    //     "Business Intelligence",
    //     "Financial Inclusion",
    //     "Cyber laws",
    //     "Fintech Securities",
    //     "Stock Market & Indices",
    //   ],
    // },
    {
      id: "organizational-management",
      title: "Technology in Organizational Management",
      icon: "🏢",
      color: "from-blue-500 to-indigo-600",
      topics: [
        "Consumer Behavioural Science",
        "International Relations",
        "Optimization Technique",
        "E-Commerce and Supply Chain Management",
        "Practices and Technology in ICT",
        "Business Intelligence",
        "Financial Inclusion",
        "Policy Innovation",
        "Fintech Securities and Disruption",
        "Stock Market & Indices",
        "Digital Democracy",
        "Cyber Laws",
        "Industrial & Labor Laws"
      ],
    },
    {
      id: "defence-technology",
      title: "Innovation in Defence Technology",
      icon: "🛡️",
      color: "from-gray-600 to-gray-900",
      topics: [
        "Defence Systems Development",
        "Stealth Technology",
        "Radar Engineering",
        "Military Intelligence & Surveillance",
        "Arm and Weapons Manufacturing",
        "Defence Industry and Innovation",
        "Defence Procurement Strategies",
        "Drone and Anti-Drone Engineering",
        "Directed Energy Weapons (DEWs)",
        "Data-Driven Decision Support in Military Operations",
        "Cyber Security for National Interest",
        "Predictive Analytics for Defence Strategies"
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
      {/* dot pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <FloatingTopBar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <FloatingSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <div className="ml-0 xl:ml-80 lg:ml-80 mr-4 lg:mr-8 pt-32 pb-12 px-4 lg:px-8 transition-all duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Call for Papers
            </motion.h1>
          </motion.div> */}

          {/* Paper Publication Partner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Paper Publication Partner
            </h2>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 flex items-center justify-center">
              <div className="bg-white rounded-xl p-5">
                <img
                  src="/springer.jpeg"
                  alt="Springer - Paper Publication Partner"
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Announcement to Authors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Announcement to Authors (Full Paper)
            </h2>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 space-y-5">
              <p className="text-white/90 leading-relaxed">
                We sincerely thank all our dear authors for their valuable contributions and submissions. Your research efforts and dedication are highly appreciated.
              </p>

              {/* Accepted / Revised */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Regarding Full Paper Decisions — <span className="text-green-300">Accepted / Revised Papers</span>
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Authors of accepted and revised papers have been notified directly by the editorial team through Springer. Please follow the instructions provided in the communication for the next steps.
                </p>
              </div>

              {/* Rejected & Desk-Rejected */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  <span className="text-red-300">Rejected & Desk-Rejected Papers</span>
                </h3>
                <p className="text-white/85 leading-relaxed mb-3">
                  Authors of rejected and desk-rejected submissions have been informed through the CMT portal.
                </p>
                <p className="text-white/85 mb-2">Desk rejections were made based on the following criteria:</p>
                <ul className="list-disc list-inside text-white/80 space-y-1 pl-2">
                  <li>High AI-generated content percentage</li>
                  <li>Excessive plagiarism percentage</li>
                  <li>Non-compliance with Springer formatting guidelines</li>
                  <li>Simultaneous submission to another conference or journal</li>
                </ul>
              </div>

              {/* CMT Portal Note */}
              <p className="text-white/85 leading-relaxed">
                Authors may log in to the{" "}
                <a
                  href="https://cmt3.research.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200 transition-colors"
                >
                  CMT portal
                </a>{" "}
                to review the decision and related details.
              </p>

              {/* Portal Open Notice */}
              <div className="bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                <p className="text-yellow-300 font-medium text-sm md:text-base">
                  The portal is now open (Till 25th February) only for Abstract / Poster / Model Submission.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Author Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Author Guidelines
            </h2>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
              <p className="text-white/90 leading-relaxed mb-4">
                Authors are required to submit their original research papers in
                the Springer format using the provided link. Papers should
                follow the{" "}
                <a href="https://scispace.com/formats/springer-conferences/default-format-for-springer-conferences/f8d71f9027f449abb4f73d0a7bf6d340">
                  <span className="text-blue-300 underline cursor-pointer">
                    single-page, single-column Springer format
                  </span>
                </a>{" "}
                and must not exceed 12-14 pages. Submissions exceeding this
                limit will be rejected. Papers should be submitted through the{" "}
                <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F">
                  <span className="text-blue-300 underline cursor-pointer">
                    submission link
                  </span>
                </a>{" "}
                within the dates mentioned in the conference schedule.
              </p>
            </div>
          </motion.div>

          {/* best paper award */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6s mb-3">
              Best Paper Award
            </h2>
            <p className="text-white/90 leading-relaxed">
              One paper will be selected from every session by the panel members
              and will be awarded as Best Paper Award. The decision is fully
              depending on the jury members.
            </p>
            {/* <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/90 leading-relaxed">
                  One paper will be selected from every session by the panel
                  members and will be awarded as Best Paper Award. The decision
                  is fully depending on the jury members.
                </p>
              </div>
            </div> */}
          </motion.div>

          {/* conference topics/subjects  */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Conference Tracks
            </h2> */}
            <div className="space-y-4">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === section.id ? "" : section.id
                      )
                    }
                    className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center text-2xl`}
                      >
                        {section.icon}
                      </div>
                      <h3 className="text-white font-semibold text-lg text-left">
                        {section.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {expandedSection === section.id ? (
                        <ChevronUp className="w-5 h-5 text-white/70" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/70" />
                      )}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === section.id ? "auto" : 0,
                      opacity: expandedSection === section.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {section.topics.length > 0 ? (
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {section.topics.map((topic, topicIndex) => (
                            <motion.div
                              key={topic}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: topicIndex * 0.05,
                              }}
                              className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                              <span className="text-white/90 text-sm">
                                {topic}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="px-6 pb-6">
                        <p className="text-white/70 text-center py-4">
                          Track details will be announced soon
                        </p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
