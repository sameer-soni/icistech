import { motion } from "framer-motion";
import { useState } from "react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const Gallery = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: "/gallery/1.jpg",
      alt: "Conference Event 1",
    },
    {
      id: 2,
      src: "/gallery/2.jpg",
      alt: "Conference Event 2",
    },
    {
      id: 3,
      src: "/gallery/3.jpg",
      alt: "Conference Event 3",
    },
    {
      id: 4,
      src: "/gallery/4.jpg",
      alt: "Conference Event 4",
    },
    {
      id: 5,
      src: "/gallery/5.jpg",
      alt: "Conference Event 5",
    },
    {
      id: 6,
      src: "/gallery/6.jpg",
      alt: "Conference Event 6",
    },
    {
      id: 7,
      src: "/gallery/7.jpg",
      alt: "Conference Event 7",
    },
    {
      id: 8,
      src: "/gallery/8.jpg",
      alt: "Conference Event 8",
    },
    {
      id: 9,
      src: "/gallery/9.jpg",
      alt: "Conference Event 9",
    },
    {
      id: 10,
      src: "/gallery/10.jpg",
      alt: "Conference Event 10",
    },
    {
      id: 11,
      src: "/gallery/11.jpg",
      alt: "Conference Event 11",
    },
    {
      id: 12,
      src: "/gallery/12.jpg",
      alt: "Conference Event 12",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      <FloatingTopBar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <FloatingSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <div className="ml-0 xl:ml-80 lg:ml-80 mr-4 lg:mr-8 pt-32 pb-12 px-4 lg:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto min-[1024px]:max-[1692px]:pl-[40px] min-[1024px]:max-[1612px]:pl-[80px]">
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
              EXPERIENCE THE EVENT
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Gallery
            </motion.h1>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
