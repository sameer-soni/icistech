import { motion } from "framer-motion";
import {
  Home,
  Info,
  Users,
  FileText,
  Calendar,
  Image,
  BookOpen,
  DollarSign,
  UserPlus,
  Mail,
  ChevronDown,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Home", hasDropdown: false, path: "/" },
  { icon: Info, label: "About", hasDropdown: true, path: "#" },
  {
    icon: Users,
    label: "Organizing Committee",
    hasDropdown: false,
    path: "/committee",
  },
  {
    icon: FileText,
    label: "Call for Papers",
    hasDropdown: false,
    path: "/call-for-papers",
  },
  {
    icon: FileText,
    label: "Call for Abstract/Posters",
    hasDropdown: false,
    path: "/call-for-poster",
  },
  {
    icon: UserPlus,
    label: "Registration",
    hasDropdown: false,
    path: "/registration",
  },
  {
    icon: Calendar,
    label: "Important Dates",
    hasDropdown: false,
    path: "/important-dates",
  },
  { icon: Image, label: "Gallery", hasDropdown: false, path: "/gallery" },
  {
    icon: BookOpen,
    label: "Published Works",
    hasDropdown: false,
    path: "/published-works",
  },
  {
    icon: DollarSign,
    label: "Sponsors",
    hasDropdown: false,
    path: "/sponsors",
  },

  { icon: Mail, label: "Contact us", hasDropdown: false, path: "/contact" },
];

interface FloatingSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const FloatingSidebar = ({ isOpen = false, onClose }: FloatingSidebarProps) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <style>
        {`
          /* Height-based media queries for desktop sidebar */
          .desktop-sidebar {
            overflow-y: visible;
          }

          .desktop-nav {
            gap: 0.75rem; /* Default spacing (space-y-3) */
          }
            .desktop-nav-item {
              padding: 0.875rem 1.5rem; /* py-3.5 px-6 */
            }
               .desktop-dropdown-item {
              padding: 0.875rem 1.25rem; /* py-3.5 px-5 */
            }

          /* 754px and below - start reducing spacing */
          @media (max-height: 754px) {
            .desktop-nav {
              gap: 0.5rem;
            }
            .desktop-nav-item {
              padding: 0.875rem 1.5rem; /* py-3.5 px-6 */
            }
            .desktop-dropdown-item {
              padding: 0.875rem 1.25rem; /* py-3.5 px-5 */
            }
          }

          /* 650px and below - further reduce spacing */
          @media (max-height: 685px) {
            .desktop-nav {
              gap: 0.375rem;
            }
            .desktop-nav-item {
              padding: 0.75rem 1.5rem; /* py-3 px-6 */
            }
            .desktop-dropdown-item {
              padding: 0.75rem 1.25rem; /* py-3 px-5 */
            }
          }

          /* 580px and below - minimal spacing */
          @media (max-height: 632px) {
            .desktop-nav {
              gap: 0.25rem;
            }
            .desktop-nav-item {
              padding: 0.625rem 1.5rem; /* py-2.5 px-6 */
            }
            .desktop-dropdown-item {
              padding: 0.625rem 1.25rem; /* py-2.5 px-5 */
            }
          }

          /* 512px and below - enable scrolling */
          @media (max-height: 581px) {
            .desktop-sidebar {
              overflow-y: auto;
            }
            .desktop-nav {
              gap: 0.25rem;
            }
            .desktop-nav-item {
              padding: 0.5rem 1.5rem; /* py-2 px-6 */
            }
            .desktop-dropdown-item {
              padding: 0.5rem 1.25rem; /* py-2 px-5 */
            }
          }
        `}
      </style>

      {/* movible overlay.. */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* desktop sidebar */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:block fixed left-4 top-28 bottom-4 w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 z-40 desktop-sidebar"
      >
        <nav
          className="desktop-nav"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {menuItems.map((item, index) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <motion.button
                  whileHover={{ scale: 1.02, x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full flex items-center justify-between desktop-nav-item text-white/90 hover:text-white bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-100 text-left group backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <span className="text-base font-semibold">
                      {item.label}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
              ) : (
                <Link to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center desktop-nav-item text-white/90 hover:text-white bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-100 group backdrop-blur-sm ${
                      location.pathname === item.path
                        ? "bg-white/15 text-white shadow-lg"
                        : ""
                    }`}
                  >
                    <span className="text-base font-semibold">
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              )}

              {item.label === "About" && (
                <motion.div
                  initial={false}
                  animate={{
                    height: aboutOpen ? "auto" : 0,
                    opacity: aboutOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="ml-8 mt-2 space-y-s2 flex flex-col gap-2">
                    <Link to={"/amity-university"}>
                      <motion.button
                        whileHover={{ x: 8 }}
                        className="block w-full text-left desktop-dropdown-item text-base font-medium text-white/70 hover:text-white bg-white/8 hover:bg-white/12 rounded-lg transition-all duration-200 backdrop-blur-sm"
                      >
                        Amity University
                      </motion.button>
                    </Link>
                    <Link to={"/icistech"}>
                      <motion.button
                        whileHover={{ x: 8 }}
                        className="block w-full text-left desktop-dropdown-item text-base font-medium text-white/70 hover:text-white bg-white/8 hover:bg-white/12 rounded-lg transition-all duration-200 backdrop-blur-sm"
                      >
                        ICISTECH
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </motion.div>

      {/* mobile Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 40 : -300 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="lg:hidden fixed -left-10 top-0 bottom-0 w-72 bg-white/10 backdrop-blur-md border-r border-white/20 z-50  overflow-scroll"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">AU</span>
              </div>
              <div className="text-white text-sm font-bold">ICISTECH25</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-white p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={18} />
            </motion.button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <motion.button
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl transition-all duration-300 text-left group backdrop-blur-sm"
                  >
                    <div className="flex items-center">
                      <span className="text-base font-semibold">
                        {item.label}
                      </span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </motion.button>
                ) : (
                  <Link to={item.path} onClick={onClose}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center px-4 py-3.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl transition-all duration-300 group backdrop-blur-sm ${
                        location.pathname === item.path
                          ? "bg-white/15 text-white shadow-lg"
                          : ""
                      }`}
                    >
                      <span className="text-base font-semibold">
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                )}

                {item.label === "About" && (
                  <motion.div
                    initial={false}
                    animate={{
                      height: aboutOpen ? "auto" : 0,
                      opacity: aboutOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-6 mt-1.5 space-y-1.5">
                      <Link to={"/amity-university"}>
                        <motion.button
                          whileHover={{ x: 8 }}
                          className="block w-full text-left px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white bg-white/8 hover:bg-white/12 rounded-lg transition-all duration-200 backdrop-blur-sm"
                        >
                          Amity University
                        </motion.button>
                      </Link>
                      <Link to={"/icistech"}>
                        <motion.button
                          whileHover={{ x: 8 }}
                          className="block w-full text-left px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white bg-white/8 hover:bg-white/12 rounded-lg transition-all duration-200 backdrop-blur-sm"
                        >
                          ICISTECH
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingSidebar;
