import { motion } from "framer-motion";
import { Calendar, Mail, Clock, Camera, Target } from "lucide-react";
import { useState } from "react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const ImportantDates = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const events = [
    {
      icon: Calendar,
      title: "Paper Submission Deadline",
      date: "31st Oct, 2025",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Mail,
      title: "Acceptance Notification",
      date: "20th Nov, 2025",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: Clock,
      title: "Registration Deadline",
      date: "05th Dec, 2025",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/20",
    },
    {
      icon: Camera,
      title: "Camera-Ready Version",
      date: "05th Dec, 2025",
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-500/20",
    },
    {
      icon: Target,
      title: "Conference Dates",
      date: "11th - 12th Dec, 2025",
      color: "from-indigo-400 to-purple-400",
      bgColor: "bg-indigo-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* sqare pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(0deg, white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-4"
            >
              Conference Schedule
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Important Dates
            </motion.h1>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Animated central line*/}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full hidden md:block"
              style={{ top: "1rem", bottom: "1rem" }}
            />

            {/* Timeline events */}
            <div className="space-y-6 md:space-y-0 relative">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.3 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  } justify-center`}
                >
                  <div
                    className={`w-full md:max-w-md ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`${event.bgColor} backdrop-blur-md border border-white/20 rounded-2xl p-6 relative`}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center`}
                        >
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-lg">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="w-4 h-4 text-white/70" />
                            <p className="text-white/90 text-sm">
                              {event.date}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 hidden md:block ${
                          index % 2 === 0
                            ? "right-0 translate-x-1/2"
                            : "left-0 -translate-x-1/2"
                        }`}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 1.5 + index * 0.3,
                          }}
                          className={`w-4 h-4 bg-gradient-to-br ${event.color} rounded-full border-4 border-white/20`}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
