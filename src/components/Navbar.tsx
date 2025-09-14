import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-purple-600 shadow-md sticky top-0 left-0 w-full z-50"
      >
        <div className="max-w-screen px-4 sm:px-6">
          <div className="flex justify-around items-center h-14">
            <NavLink to="/" className="text-2xl font-bold text-white">
              JobsHere
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 text-white">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition duration-200 ${
                    isActive
                      ? "border-b-white"
                      : "border-transparent hover:border-b-white"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition duration-200 ${
                    isActive
                      ? "border-b-white"
                      : "border-transparent hover:border-b-white"
                  }`
                }
              >
                Jobs
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition duration-200 ${
                    isActive
                      ? "border-b-white"
                      : "border-transparent hover:border-b-white"
                  }`
                }
              >
                About
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-purple-600 shadow-lg"
          >
            <div className="flex flex-col px-4 py-1 space-y-4 text-purple-600 text-center text-lg font-medium">
              <NavLink
                to="/"
                className="block w-full py-1 rounded hover:bg-purple-600 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/jobs"
                className="block w-full py-1 rounded hover:bg-purple-600 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Jobs
              </NavLink>
              <NavLink
                to="/about"
                className="block w-full py-1 rounded hover:bg-purple-600 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
