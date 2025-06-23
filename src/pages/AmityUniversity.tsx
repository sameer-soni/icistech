import { useState } from "react";
import { motion } from "framer-motion";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const AmityUniversity = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <style>
        {`
          /* Height-based responsive styles */
          .amity-container {
            padding-top: 10rem; /* pt-24 default */
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .amity-title {
            margin-bottom: 2rem; /* mb-8 default */
            display: block;
          }

          .amity-content {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .amity-grid {
            gap: 2rem; /* gap-8 default */
          }

          .amity-image {
            width: 100%; /* Reduced width instead of height */
            height: 400px; /* Fixed height */
            object-fit: cover;
            object-position: center;
          }

          /* 800px height and below - reduce spacing */
          @media (max-height: 800px) {
            .amity-container {
              padding-top: 8rem;
            }
            .amity-title {
              margin-bottom: 1.5rem;
            }
            .amity-grid {
              gap: 1.5rem;
            }
          }

          /* 750px height and below - further reduce */
          @media (max-height: 750px) {
            .amity-container {
              padding-top: 8rem;
            }
            .amity-title {
              margin-bottom: 1rem;
            }
            .amity-grid {
              gap: 1.25rem;
            }
            .amity-image {
              width: 100%;
              height: 350px;
            }
          }

          /* 700px height and below - hide title and enable scrolling */
          @media (max-height: 700px) {
            .amity-container {
              padding-top: 10rem;
              min-height: 100vh;
              display: block;
            }
            .amity-title {
              display: none;
            }
            .amity-content {
              max-height: calc(100vh - 8rem);
              overflow-y: auto;
              display: block;
            }
            .amity-grid {
              gap: 1rem;
            }
            .amity-image {
              width: 100%;
              height: 300px;
            }
          }

          /* 600px height and below - more compact */
          @media (max-height: 600px) {
            .amity-container {
              padding-top: 7rem;
            }
            .amity-content {
              max-height: calc(100vh - 6rem);
            }
            .amity-image {
              width: 100%;
              height: 280px;
            }
          }

          /* 500px height and below - very compact */
          @media (max-height: 500px) {
            .amity-container {
              padding-top: 7rem;
            }
            .amity-content {
              max-height: calc(100vh - 5rem);
            }
            .amity-image {
              width: 100%;
              height: 250px;
            }
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 relative overflow-hidden">
        <FloatingTopBar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <FloatingSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="lg:pl-80 pl-4 pr-4 amity-container">
          {/* title*/}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center amity-title"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4">
              Amity University
            </h1>
            <p className="text-xl text-slate-300">
              India's Leading Research and Innovation-Driven Education Group
            </p>
          </motion.div>

          {/* main ccontent contianer */}
          <div className="max-w-6xl mx-auto amity-content">
            <div className="grid lg:grid-cols-2 amity-grid items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 shadow-xl border border-slate-600/50">
                  <img
                    src="/Amity.jpg"
                    alt="Amity University Campus"
                    className="amity-image rounded-xl shadow-lg"
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
                <div className="bg-slate-700/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-600/40">
                  <h2 className="text-3xl font-bold text-slate-200 mb-6">
                    About Amity University, Patna
                  </h2>

                  <div className="space-y-4 text-slate-300">
                    <p className="text-lg leading-relaxed">
                      Amity University, Patna, is part of India's leading
                      research and innovation-driven education group, recognized
                      among the top 3% of universities globally (QS-2018). With
                      over 200,000 students across 400+ programs, Amity has a
                      strong focus on research, boasting 6,000+ publications,
                      1,100+ patents, and 36,000+ on-campus placements.
                    </p>

                    <p className="text-lg leading-relaxed">
                      Committed to revolutionizing higher education, Amity
                      University, Patna, offers globally benchmarked,
                      research-oriented programs with a strong emphasis on
                      employability. Its dedicated placement cell and corporate
                      resource team actively engage with industries to support
                      career growth.
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

export default AmityUniversity;
