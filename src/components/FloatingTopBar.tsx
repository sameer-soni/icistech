import { motion } from "framer-motion";
import { Menu, QrCode } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface FloatingTopBarProps {
  onMenuToggle?: () => void;
}

const FloatingTopBar = ({ onMenuToggle }: FloatingTopBarProps) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
    >
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="" className="w-28 sm:w-40" />
      </div>

      {/* Desktop title - Centered */}
      {/* <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-white font-bold text-xl tracking-wider text-blue-300">
        ICIS<span className="text-purple-400">TECH</span>26
      </div> */}

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Register Button - Themed Gradient */}
        <a
          href="https://amity.edu/nspg/icistech2026/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap border border-white/20"
        >
          Register
        </a>

        {/* Get QR Button with Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-white/10 hover:bg-white/20 text-white p-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 group">
              <QrCode
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="hidden sm:inline">Get QR</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-white/5 backdrop-blur-2xl border-white/10 text-white shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
            
            <DialogHeader className="relative z-10">
              <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent pt-4">
                Registration QR
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col items-center justify-center p-6 relative z-10">
              <div className="bg-white p-4 rounded-2xl shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
                <img
                  src="/QR.png"
                  alt="Registration QR Code"
                  className="w-full max-w-[240px] aspect-square object-contain"
                />
              </div>
              
              <div className="mt-8 space-y-2 text-center">
             
                <p className="text-white/60 text-sm max-w-[240px] mx-auto">
                  Scan this QR code to proceed with the registration.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center pb-6 relative z-10">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50" />
            </div>
          </DialogContent>
        </Dialog>

        {/* Mobile hamburger menu */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-[1000]"
        >
          <Menu size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default FloatingTopBar;
