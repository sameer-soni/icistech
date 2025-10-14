
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Globe, GraduationCap, Building, Calendar, CreditCard, Presentation, StickyNote } from 'lucide-react';
import FloatingTopBar from '../components/FloatingTopBar';
import FloatingSidebar from '../components/FloatingSidebar';

const Registration = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const internationalFees = [
    { category: "International Participant", fee: "$350", icon: Globe, color: "from-blue-600 to-blue-400" },
    { category: "Early Registration (on or before 30th October, 25)", fee: "$250", icon: Calendar, highlight: true, color: "from-emerald-600 to-emerald-400" }
  ];

  const domesticFees = [
    { category: "Faculty Members/ Researchers/ Scientists/ Industry Persons", fee: "₹10,000", icon: Building, color: "from-purple-600 to-purple-400" },
    { category: "Early Registration (On or Before 30th October, 25)", fee: "₹9,500", icon: Calendar, highlight: true, color: "from-emerald-600 to-emerald-400" },
    { category: "Member or Fellow (IEEE/ CSI/ IE/ OSA)", fee: "₹9,000", icon: Users, color: "from-indigo-600 to-indigo-400" },
    { category: "First/ Corresponding Author belongs to an institute under the NIRF 100 Rank", fee: "₹9,000", icon: Building, color: "from-cyan-600 to-cyan-400" },
    { category: "Students (With a valid ID Card/ College ID)", fee: "₹9,000", icon: GraduationCap, color: "from-teal-600 to-teal-400" },
    { category: "Abstract Presentation & Publication (Faculty Members/ Researchers/ Scientists/ Industry Persons/ Students)", fee: "₹1,000", icon: Presentation, color: "from-teal-600 to-teal-400" },
    { category: "Poster/ Modal Presentation(Faculty Members/ Researchers/ Scientists/ Industry Persons/ Students)", fee: "₹500", icon: StickyNote, color: "from-teal-600 to-teal-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <FloatingTopBar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <FloatingSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      {/* Main Content - Responsive margins */}
      <div className="ml-0 sm:ml-0 md:ml-0 lg:ml-80 xl:ml-80 mr-4 lg:mr-8 pt-32 pb-12 px-4 lg:px-8 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
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
              className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-4"
            >
              Event Registration
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Registration Details
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Join ICISTECH25 - Register now for the premier international conference on information systems and technology
            </motion.p>
          </motion.div>

          {/* International Participants Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-300 rounded-xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-emerald-900" />
                </div>
                <h2 className="text-3xl font-bold text-white">International Participants</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internationalFees.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className={`p-6 rounded-xl border ${
                      item.highlight 
                        ? 'bg-emerald-500/20 border-emerald-400/30' 
                        : 'bg-gray-700/30 border-gray-600/30'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">{item.category}</h3>
                          {item.highlight && (
                            <span className="text-emerald-400 text-xs font-medium">Special Offer</span>
                          )}
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${item.highlight ? 'text-emerald-300' : 'text-blue-300'} text-center sm:text-right`}>
                        {item.fee}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Indian Participants Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-300 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-emerald-900" />
                </div>
                <h2 className="text-3xl font-bold text-white">Indian Participants</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {domesticFees.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    className={`p-6 rounded-xl border ${
                      item.highlight 
                        ? 'bg-emerald-500/20 border-emerald-400/30' 
                        : 'bg-gray-700/30 border-gray-600/30'
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-sm leading-tight break-words">{item.category}</h3>
                          {item.highlight && (
                            <span className="text-emerald-400 text-xs font-medium">Special Offer</span>
                          )}
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${item.highlight ? 'text-emerald-300' : 'text-purple-300'} text-center`}>
                        {item.fee}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="bg-yellow-500/10 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Important Note</h3>
              </div>
              <p className="text-gray-300">
                *GST or other Taxes will be applicable accordingly over fees.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
