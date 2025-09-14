import { motion } from "framer-motion";
const Footer:React.FC = () => {
  return (
    <motion.footer
      className="bg-purple-600 text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Job Portal Clone</h2>
          <p className="text-sm text-purple-100 mt-1">
            Made for learning & practice with React, Tailwind & Framer Motion.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="/" className="hover:text-purple-200 transition-colors">
            Home
          </a>
          <a href="/jobs" className="hover:text-purple-200 transition-colors">
            Jobs
          </a>
          <a href="/about" className="hover:text-purple-200 transition-colors">
            About
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-purple-100">
        © {new Date().getFullYear()} Job Portal Clone. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
