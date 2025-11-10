import { motion } from "framer-motion";
// Removed unused icons: FileText, Users, Award, ChevronDown, ChevronUp
import { useState } from "react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const CallForPoster = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {/* Header - Commented out as in original */}
          {/* <motion.div ... </motion.div> */}

          {/* CALL FOR ABSTRACT SUBMISSION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              CALL FOR ABSTRACT SUBMISSION - ORAL PRESENTATION
            </h2>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
              <p className="text-white/90 leading-relaxed mb-4">
                ICISTECH 2.0, the 2nd International Conference on Innovative
                Science, Engineering & Technology, welcomes researchers,
                academicians, industry experts, and students to submit
                abstracts for Oral Presentation.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">
                Guidelines for Abstract Submission
              </h3>
              <ul className="text-white/90 leading-relaxed list-disc list-inside space-y-2">
                <li>Abstract should not exceed 300 words.</li>
                <li>Use Times New Roman, 12-point font, single spacing.</li>
                <li>
                  Clearly mention Title, Author(s), Affiliation, Email ID.
                </li>
                <li>Keywords: Maximum 5.</li>
                <li>
                  The abstract must be submitted in MS Word (doc/docx) format
                  to ssambhav@ptn.amity.edu or ssingh3@ptn.amity.edu
                </li>
                <li>
                  Authors are advised to submit abstract in the areas that
                  align with the conference themes.
                </li>
                <li>
                  Accepted abstracts will be published in the Conference
                  Proceedings/Booklet.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Review & Selection Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6s mb-3">
              Review & Selection Process
            </h2>
            {/* Using the simple text layout from original 'Best Paper' section */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
              <ul className="text-white/90 leading-relaxed list-disc list-inside space-y-2">
                <li>
                  All submissions will be peer-reviewed by the technical
                  committee.
                </li>
                <li>
                  Accepted abstracts will be scheduled for Oral Presentation
                  during the conference.
                </li>
                <li>Number of presentation slides must not exceed 20.</li>
                <li>
                  Only selected and presented abstract will be considered for
                  publication in Conference Proceedings with ISBN (details
                  will be shared).
                </li>
                <li>
                  The Presentation Certificates will be provided for all the
                  presented abstracts.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* CALL FOR POSTERS AND MODELS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              CALL FOR POSTERS AND MODELS
            </h2>

            {/* Main Description Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-white/90 leading-relaxed">
                ICISTECH 2.0, the 2nd International Conference on Innovative
                Science, Engineering & Technology, welcomes researchers,
                academicians, industry experts, and students to present their
                innovative ideas, prototypes, and research work in a visually
                engaging and interactive format. Posters/Models will be
                evaluated based on technical merit and innovation as well as
                the potential to stimulate interesting discussions and
                exchange of ideas at the conference. The poster session is
                meant to introduce new or ongoing work and provide
                opportunities for authors to interact directly with attendees.
                Selected posters and demos must be presented in person and
                there will be no remote presentation available.
              </p>
            </div>

            {/* Poster Presentation Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Poster Presentation
              </h3>
              <ul className="text-white/90 leading-relaxed list-disc list-inside space-y-2">
                <li>Poster size: Recommended poster size should be A1/A2.</li>
                <li>
                  The poster should include Title, Author(s), Affiliation,
                  Introduction, Methodology, Results, and Conclusion.
                </li>
                <li>Best posters will be awarded.</li>
              </ul>
            </div>

            {/* Model Presentation Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Model Presentation
              </h3>
              <ul className="text-white/90 leading-relaxed list-disc list-inside space-y-2">
                <li>
                  Models should be working/prototype/demo-based and related
                  to the conference theme.
                </li>
                <li>Best models will be awarded.</li>
              </ul>
            </div>

            {/* Topics of Interest Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                TOPICS OF INTEREST FOR POSTER/MODELS
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Authors are advised to present poster/model in the areas that
                align with the following themes (but not limited to):
              </p>
              <ul className="text-white/90 leading-relaxed list-disc list-inside space-y-2">
                <li>Innovations Shaping the Future</li>
                <li>Bridging Theory and Practice</li>
                <li>Tomorrow’s Solutions, Today’s Research</li>
                <li>Empowering Youth, Inspiring Change</li>
                <li>Sustainability Through Student Innovation</li>
                <li>Smart Ideas, Smarter Future</li>
                <li>The Digital Generation: Innovate. Create. Lead.</li>
                <li>AI, Creativity, and the Human Spirit</li>
                <li>Inspiring Minds, Building Futures</li>
                <li>Dare to Dream, Dare to Do</li>
              </ul>
            </div>
          </motion.div>

          {/* Registration Fees Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-12 mt-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Registration Fees
            </h2>

            {/* Abstract Presentation Fee Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                ABSTRACT PRESENTATION & PUBLICATION
              </h3>
              {/* Responsive Price Item */}
              <div className="md:flex md:justify-between md:items-center">
                <p className="text-white/90 mb-2 md:mb-0 md:max-w-md lg:max-w-lg">
                  Faculty Members/ Researchers/ Scientists/ Industry
                  Persons/ Students
                </p>
                <div className="text-white text-lg font-bold md:text-right flex-shrink-0">
                  <span className="md:hidden text-white/70 text-sm font-normal">
                    Fee:{" "}
                  </span>
                  Rs. 1,000
                </div>
              </div>
            </div>

            {/* Poster/Model Presentation Fee Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                POSTER/ MODEL PRESENTATION
              </h3>
              {/* Responsive Price Item */}
              <div className="md:flex md:justify-between md:items-center">
                <p className="text-white/90 mb-2 md:mb-0 md:max-w-md lg:max-w-lg">
                  Faculty Members/ Researchers/ Scientists/ Industry
                  Persons/ Students
                </p>
                <div className="text-white text-lg font-bold md:text-right flex-shrink-0">
                  <span className="md:hidden text-white/70 text-sm font-normal">
                    Fee:{" "}
                  </span>
                  Rs. 500
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallForPoster;