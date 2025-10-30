import { useState } from "react";
import { motion } from "framer-motion";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const IcisTech = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <style>
        {`
          /* Height-based responsive styles */
          .icistech-container {
            padding-top: 6rem; /* pt-24 default */
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .icistech-title {
            margin-bottom: 2rem; /* mb-8 default */
            display: block;
          }

          .icistech-content {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .icistech-grid {
            gap: 2rem; /* gap-8 default */
          }

          .icistech-image {
            width: 100%; /* Reduced width instead of height */
            height: 400px; /* Fixed height */
            object-fit: cover;
            object-position: center;
          }

          /* 800px height and below - reduce spacing */
          @media (max-height: 800px) {
            .icistech-container {
              padding-top: 7rem;
            }
            .icistech-title {
              display:none
            }
            .icistech-grid {
              gap: 1.5rem;
            }
          }

          /* 750px height and below - further reduce */
          @media (max-height: 750px) {
            .icistech-container {
              padding-top: 4rem;
            }
            .icistech-title {
              margin-bottom: 1rem;
            }
            .icistech-grid {
              gap: 1.25rem;
            }
            .icistech-image {
              width: 100%;
              height: 350px;
            }
          }

          /* 700px height and below - hide title and enable scrolling */
          @media (max-height: 700px) {
            .icistech-container {
              padding-top: 7rem;
              min-height: 100vh;
              display: block;
            }
            .icistech-title {
              display: none;
            }
            .icistech-content {
              max-height: calc(100vh - 8rem);
              overflow-y: auto;
              display: block;
            }
            .icistech-grid {
              gap: 1rem;
            }
            .icistech-image {
              width: 100%;
              height: 300px;
            }
          }

          /* 600px height and below - more compact */
          @media (max-height: 600px) {
            .icistech-container {
              padding-top: 7rem;
            }
            .icistech-content {
              max-height: calc(100vh - 6rem);
            }
            .icistech-image {
              width: 100%;
              height: 280px;
            }
          }

          /* 500px height and below - very compact */
          @media (max-height: 500px) {
            .icistech-container {
              padding-top: 7rem;
            }
            .icistech-content {
              max-height: calc(100vh - 5rem);
            }
            .icistech-image {
              width: 100%;
              height: 250px;
            }
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 relative overflow-hidden">
        <FloatingTopBar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <FloatingSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="lg:pl-80 pl-4 pr-4 icistech-container flex justify-center">
          {/* Titl */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center icistech-title"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-300 mb-4">
              ICISTECH-26
            </h1>
            <p className="text-xl text-blue-200">
              Advancing Technology Through Global Collaboration
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto icistech-contents">
            <div className="grid lg:grid-cols-2 icistech-grid items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 shadow-xl border border-white/20">
                  <img
                    src="https://conf20252.netlify.app/ICISTECH.jpg"
                    alt="ICISTECH Conference"
                    className="icistech-image rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    International Conference on Innovation in Science and
                    Technology
                  </h2>

                  <div className="space-y-4 text-gray-200">
                    <p className="text-lg leading-relaxed">
                      ICISTECH-26, organized by Amity School of Engineering &
                      Technology (ASET), Amity University Patna, is a premier
                      conference focused on recent research challenges and
                      advancements in science and technology.
                    </p>

                    <p className="text-lg leading-relaxed">
                      It aims to accelerate knowledge translation into practical
                      innovations. The event features keynote sessions, expert
                      talks, and presentations from faculty, researchers,
                      students, and industry professionals through oral and
                      poster formats.
                    </p>

                    <p className="text-lg leading-relaxed text-blue-200">
                      The conference will be held in hybrid mode. Check our
                      website for detailed information about submissions,
                      registration, and payment procedures.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IcisTech;
