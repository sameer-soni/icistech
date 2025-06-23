import { motion } from "framer-motion";

interface TimelineCardProps {
  icon: any;
  title: string;
  date: string;
  subtitle?: string;
  delay?: number;
}

const TimelineCard = ({
  icon: Icon,
  title,
  date,
  subtitle,
  delay = 0,
}: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="card-cont flex flex-col items-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 cursor-pointer group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300 card-icon"
      >
        <Icon className="w-6 h-6 text-white icon-size" />
      </motion.div>

      <h3 className="text-white font-semibold text-center mb-2 group-hover:text-blue-200 transition-colors duration-300 card-title">
        {title}
      </h3>

      <p className="text-white/80 text-sm text-center mb-1 card-date">{date}</p>

      {subtitle && (
        <p className="text-white/60 text-xs text-center card-subtitle">
          {subtitle}
        </p>
      )}

      <style jsx>{`
        /* Height breakpoint 1: 728px and below */
        @media (max-height: 728px) {
          .card-cont {
            padding: 1rem;
            border-radius: 1rem;
          }

          .card-icon {
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: 0.75rem;
            border-radius: 0.75rem;
          }

          .icon-size {
            width: 1.25rem;
            height: 1.25rem;
          }

          .card-title {
            font-size: 0.875rem;
            margin-bottom: 0.375rem;
          }

          .card-date {
            font-size: 0.75rem;
            margin-bottom: 0.25rem;
          }

          .card-subtitle {
            font-size: 0.625rem;
          }
        }

        /* Height breakpoint 2: 650px and below */
        @media (max-height: 650px) {
          .card-cont {
            padding: 0.75rem;
            border-radius: 0.75rem;
          }

          .card-icon {
            width: 2rem;
            height: 2rem;
            margin-bottom: 0.5rem;
            border-radius: 0.5rem;
          }

          .icon-size {
            width: 1rem;
            height: 1rem;
          }

          .card-title {
            font-size: 0.75rem;
            margin-bottom: 0.25rem;
            line-height: 1.2;
          }

          .card-date {
            font-size: 0.6875rem;
            margin-bottom: 0.125rem;
          }

          .card-subtitle {
            font-size: 0.5625rem;
          }
        }

        /* Height breakpoint 3: 580px and below */
        @media (max-height: 580px) {
          .card-cont {
            padding: 0.5rem;
            border-radius: 0.5rem;
          }

          .card-icon {
            width: 1.75rem;
            height: 1.75rem;
            margin-bottom: 0.375rem;
            border-radius: 0.375rem;
          }

          .icon-size {
            width: 0.875rem;
            height: 0.875rem;
          }

          .card-title {
            font-size: 0.6875rem;
            margin-bottom: 0.125rem;
            line-height: 1.1;
          }

          .card-date {
            font-size: 0.625rem;
            margin-bottom: 0.125rem;
          }

          .card-subtitle {
            font-size: 0.5rem;
          }
        }

        /* Height breakpoint 4: 512px and below */
        @media (max-height: 512px) {
          .card-cont {
            padding: 0.375rem;
            border-radius: 0.375rem;
          }

          .card-icon {
            width: 1.5rem;
            height: 1.5rem;
            margin-bottom: 0.25rem;
            border-radius: 0.25rem;
          }

          .icon-size {
            width: 0.75rem;
            height: 0.75rem;
          }

          .card-title {
            font-size: 0.625rem;
            margin-bottom: 0.0625rem;
            line-height: 1;
          }

          .card-date {
            font-size: 0.5625rem;
            margin-bottom: 0.0625rem;
          }

          .card-subtitle {
            font-size: 0.4375rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default TimelineCard;
