import { Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JobsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
            Available Jobs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border border-purple-100"
              >
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <p className="text-sm text-purple-600 font-medium mt-2">
                    {job.salary}
                  </p>
                </div>

                <Link
                  to={`/jobs/${job.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 text-center"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer/>
    </>
  );
};

export default JobsPage;
