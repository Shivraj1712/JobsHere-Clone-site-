import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl font-bold text-purple-600 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About This Project
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          This website is a <span className="font-semibold text-purple-600">clone project</span> 
          created for learning and practice purposes.  
          It mimics the look and feel of a professional job portal, but the listings and data shown 
          are entirely <span className="font-semibold">dummy content</span>.  
        </motion.p>

        <motion.p
          className="mt-6 text-lg leading-relaxed text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          The goal of this project is to explore modern web development with{" "}
          <span className="text-purple-600 font-medium">React, Typescript, Tailwind CSS, and Framer Motion</span>.  
          Features like navigation, job listings, and UI animations are implemented to replicate 
          a real-world application while keeping the design clean and minimal.
        </motion.p>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className="inline-block bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-md">
            🚀 Built as a demo for practice only
          </span>
        </motion.div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutPage;
