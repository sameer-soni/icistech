import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const PublishedWorks = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const publications = [
    {
      id: 1,
      title: "Advanced Engineering and Sustainable Solutions",
      description:
        "A comprehensive guide exploring cutting-edge engineering practices and sustainable solutions for modern technological challenges.",
      year: "2025",
      tags: ["Engineering", "Sustainability", "Technology"],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/20",
      img: "/book1.webp",
      href: "https://link.springer.com/book/10.1007/978-3-031-81128-9",
    },
    {
      id: 2,
      title:
        "Empowering Solutions for Sustainable Future in Science and Technology",
      description:
        "An in-depth exploration of innovative approaches to creating sustainable technological solutions for future generations.",
      year: "2025",
      tags: ["Science", "Technology", "Innovation"],
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/20",
      img: "/book2.webp",
      href: "https://link.springer.com/book/10.1007/978-3-031-77837-7",
    },
  ];

  const handleViewDetails = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <>
      <style>
        {`
          /* Height-based responsive padding */
          .published-works-container {
            padding-top: 8rem; /* More padding for bigger screens */
          }

          /* 900px height and below - reduce top padding */
          @media (max-height: 900px) {
            .published-works-container {
              // padding-top: 8rem;
            }
          }

          /* 800px height and below - further reduce */
          @media (max-height: 800px) {
            .published-works-container {
              // padding-top: 6rem;
            }
          }

          /* 700px height and below - minimal padding */
          @media (max-height: 700px) {
            .published-works-container {
              // padding-top: 6rem;
            }

            .published-badge{
              display:none;
            }
          }

          /* 600px height and below - very minimal */
          // @media (max-height: 600px) {
          //   .published-works-container {
          //     padding-top: 5rem;
          //   }
          // }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <FloatingTopBar
          onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        <FloatingSidebar
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Main Content */}
        <div className="lg:pl-80 pl-4 pr-4 pb-8 published-works-container">
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
                className="published-badge inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-4"
              >
                Research & Publications
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Published Works
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-white/80 max-w-3xl mx-auto"
              >
                Explore our latest research publications and scholarly
                contributions
              </motion.p>
            </motion.div>

            {/* Publications Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {publications.map((publication, index) => (
                <motion.div
                  key={publication.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className={`${publication.bgColor} backdrop-blur-md border border-white/20 rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <BookOpen className="w-full h-full text-white" />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {publication.year}
                  </div>

                  {/* Book Image */}
                  <div className="mb-6">
                    <img
                      src={publication.img}
                      alt={publication.title}
                      className="w-32 h-40 object-cover rounded-lg shadow-lg mx-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {publication.title}
                    </h3>

                    <p className="text-white/90 mb-6 leading-relaxed">
                      {publication.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {publication.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleViewDetails(publication.href)}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 text-white font-medium transition-all duration-300"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishedWorks;
