import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface FloatingTopBarProps {
  onMenuToggle?: () => void;
}

const FloatingTopBar = ({ onMenuToggle }: FloatingTopBarProps) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
    >
      <div className="flex items-center gap-3">
        {/* <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">AU</span>
        </div> */}
        <img src="/logo.png" alt="" className="w-40 " />
        {/* <div className="text-white">
          <div className="text-sm font-semibold">AMITY</div>
          <div className="text-xs opacity-80">UNIVERSITY</div>
          <div className="text-xs opacity-60">PATNA</div>
        </div> */}
      </div>

      {/* Mobile hamburger menu */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-[1000]"
      >
        <Menu size={20} />
      </button>

      {/* Desktop title */}
      <div className="hidden lg:block text-whites font-bold text-xl tracking-wider text-blue-300">
        ICIS<span className="text-purple-400">TECH</span>26
      </div>
    </motion.div>
  );
};

export default FloatingTopBar;
