import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Plane, Train } from "lucide-react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91- 7979936155, 7838947024"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ssambhav@ptn.amity.edu", "ssingh3@ptn.amity.edu"],
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Amity University, Near Rupaspur Police Station,",
        "Rupaspur, Bailey Road, Patna, Bihar - 801503",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:30 AM - 6:00 PM"],
      color: "from-orange-400 to-red-400",
    },
  ];

  const transportInfo = [
    {
      icon: Plane,
      title: "From Patna Airport",
      details: ["5.4 km (approximately 16 minutes drive) via", "Bailey road"],
      color: "from-indigo-400 to-blue-400",
    },
    {
      icon: Train,
      title: "From Patna Junction",
      details: ["9.3 km (approximately 19 minutes drive) via", "Flyover"],
      color: "from-teal-400 to-green-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 relative overflow-hidden">
      <FloatingTopBar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <FloatingSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* main content */}
      <div className="lg:ml-72 pt-28 pb-8 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-2"
            >
              Get in touch
            </motion.h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2s lg:grid-cols-[0.4fr_0.6fr] gap-6">
            {/* Contact Information */}
            <div className="space-y-4">
              {/* details */}
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      {item.title}
                    </h3>
                    {item.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-white/80 text-sm leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="space-y-3">
                {transportInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-white/80 text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Google Maps Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-300"
                >
                  Open in Google Maps
                </motion.button>
              </motion.div>
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
            >
              <div className="w-full h-80 lg:h-full min-h-[320px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.777569381341!2d85.05206687539544!3d25.61230647744617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56457e773c5d%3A0x26f4637f762e3747!2sAmity%20University%2C%20Patna!5e0!3m2!1sen!2sin!4v1750368469126!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
