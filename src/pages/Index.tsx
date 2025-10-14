import { motion } from "framer-motion";
import { Calendar, Mail, Clock, Camera, Target } from "lucide-react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";
import TimelineCard from "../components/TimelineCard";
import AnimatedBlobs from "../components/AnimatedBlobs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-700 relative overflow-hidden">
      <AnimatedBlobs />
      <FloatingTopBar onMenuToggle={handleMenuToggle} />
      <FloatingSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />

      {/* Main Content  */}
      <div className="ml-0 xl:ml-80 lg:ml-80 72 mr-4 lg:mr-8 pt-28 pb-8 px-4 lg:px-0 transition-all duration-300 min-h-screen flex flex-col justify-center main-content">
        <div className="max-w-5xl mx-auto w-full">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mb-6 md:mb-10 hero-section"
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-3 md:mb-5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight main-title"
            >
              ICIS<span className="text-purple-400">TECH</span>25
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/90 mb-2 md:mb-4 font-light px-4 leading-relaxed subtitle"
            >
              International Conference on Innovative Science, Engineering &
              Technology
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-300 mb-5 md:mb-7 px-4 scopus-text"
            >
              Accepted Papers will be published in Scopus Indexed Series
            </motion.p>

            {/* Action Buttons  */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-5 md:mb-8 px-4 button-container"
            >
              <Link to={"/call-for-papers"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg action-button"
                >
                  Call For Paper
                </motion.button>
              </Link>

              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICISTECH2025"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 text-base md:text-lg action-button"
                >
                  Submit Paper
                </motion.button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-6 md:mb-10 px-4 font-medium conference-date"
            >
              Conference: 26th - 27th February, 2026 (Hybrid Mode)
            </motion.p>
          </motion.div>

          {/* Timeline Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 timeline-grid"
          >
            <TimelineCard
              icon={Calendar}
              title="Paper Submission"
              date="31st Dec, 2025"
              delay={0.1}
            />

            <TimelineCard
              icon={Mail}
              title="Acceptance Notice"
              date="31st Jan, 2026"
              delay={0.2}
            />

            <TimelineCard
              icon={Clock}
              title="Registration"
              date="15th Feb, 2026"
              delay={0.3}
            />

            <TimelineCard
              icon={Camera}
              title="Camera Ready"
              date="15th Feb, 2026"
              delay={0.4}
            />

            <TimelineCard
              icon={Target}
              title="Conference"
              date="26th - 27th Feb, 2026"
              delay={0.5}
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        /* Height breakpoint 1: 728px and below */
        @media (max-height: 728px) {
          .main-content {
            padding-top: 5rem;
            padding-bottom: 1.5rem;
          }

          .hero-section {
            margin-bottom: 1.5rem;
          }

          .main-title {
            font-size: 3rem;
            margin-bottom: 0.75rem;
            line-height: 1.1;
          }

          .subtitle {
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
          }

          .scopus-text {
            font-size: 0.875rem;
            margin-bottom: 1rem;
          }

          .button-container {
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .action-button {
            padding: 0.5rem 1.5rem;
            font-size: 0.875rem;
          }

          .conference-date {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .timeline-grid {
            gap: 0.5rem;
          }
        }

        /* Height breakpoint 2: 650px and below */
        @media (max-height: 650px) {
          .main-content {
            padding-top: 3rem;
            padding-bottom: 1rem;
          }

          .hero-section {
            margin-bottom: 1rem;
          }

          .main-title {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
          }

          .subtitle {
            font-size: 1rem;
            margin-bottom: 0.25rem;
            line-height: 1.3;
          }

          .scopus-text {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
          }

          .button-container {
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }

          .action-button {
            padding: 0.375rem 1.25rem;
            font-size: 0.75rem;
          }

          .conference-date {
            font-size: 0.875rem;
            margin-bottom: 1rem;
          }

          .timeline-grid {
            gap: 0.375rem;
          }
        }

        /* Height breakpoint 3: 580px and below */
        @media (max-height: 580px) {
          .main-content {
            padding-top: 2rem;
            padding-bottom: 0.5rem;
          }

          .hero-section {
            margin-bottom: 0.75rem;
          }

          .main-title {
            font-size: 2rem;
            margin-bottom: 0.25rem;
          }

          .subtitle {
            font-size: 0.875rem;
            margin-bottom: 0.125rem;
            line-height: 1.2;
          }

          .scopus-text {
            font-size: 0.6875rem;
            margin-bottom: 0.5rem;
          }

          .button-container {
            gap: 0.375rem;
            margin-bottom: 0.5rem;
          }

          .action-button {
            padding: 0.25rem 1rem;
            font-size: 0.6875rem;
          }

          .conference-date {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
          }

          .timeline-grid {
            gap: 0.25rem;
          }
        }

        /* Height breakpoint 4: 512px and below */
        @media (max-height: 512px) {
          .main-content {
            padding-top: 3.5rem;
            padding-bottom: 0.25rem;
          }

          .hero-section {
            margin-bottom: 0.5rem;
          }

          .main-title {
            font-size: 2.75rem;
            margin-bottom: 0.125rem;
            line-height: 1;
          }

          .subtitle {
            font-size: 0.95rem;
            margin-bottom: 0.125rem;
            line-height: 1.1;
          }

          .scopus-text {
            font-size: 0.625rem;
            margin-bottom: 0.375rem;
          }

          .button-container {
            gap: 0.25rem;
            margin-bottom: 0.375rem;
            flex-direction: row;
          }

          .action-button {
            padding: 0.1875rem 0.75rem;
            font-size: 0.625rem;
          }

          .conference-date {
            font-size: 0.6875rem;
            margin-bottom: 0.5rem;
          }

          .timeline-grid {
            gap: 0.125rem;
          }
        }

        /* Fixed scroll logic: Only disable scroll on desktop/tablet with sufficient height */
        @media (min-width: 1024px) and (min-height: 501px) {
          body {
            overflow-y: hidden;
          }
        }

        /* Enable scroll on mobile devices (less than 1024px width) or when height is too small */
        @media (max-width: 1023px), (max-height: 500px) {
          .main-content {
            min-height: auto;
            justify-content: flex-start;
            padding-top: 8rem;
          }

          body {
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
