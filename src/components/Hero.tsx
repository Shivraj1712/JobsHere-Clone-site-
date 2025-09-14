import { NavLink } from 'react-router-dom';
import background from '../images/background.png';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 m-0 text-center relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay instead of purple */}
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-0 flex flex-col items-center gap-8 md:gap-12">
        <h2 className="font-bold text-3xl md:text-4xl text-purple-600 text-center md:text-left">
          Discover Exciting Job Opportunities
        </h2>
        <h4 className="text-purple-600 text-base md:text-lg text-center md:text-left">
          Browse the latest listings and start exploring your next role
        </h4>
        <p className="text-purple-600 max-w-xl text-sm md:text-base text-center md:text-left">
          Carefully curated jobs for practice and learning purposes.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full max-w-xl">
          <div className="flex flex-col text-purple-600 items-center md:items-start justify-between gap-6 md:gap-12">
            <span>💼 Easy job browsing</span>
            <span>⚡ Quick navigation</span>
            <span>📄 Practice-focused listings</span>
          </div>
          <div>
            <NavLink to="/jobs">
              <button className="border-2 bg-purple-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 hover:border-purple-600 transition duration-300">
                View Jobs {'>'}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
