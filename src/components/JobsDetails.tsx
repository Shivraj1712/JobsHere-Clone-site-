import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20 text-red-500 font-semibold">
          Job not found
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-3xl mx-auto px-4 bg-white rounded-xl shadow-md p-8 border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            {job.title}
          </h2>
          <p className="text-gray-700 font-medium">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
          <p className="text-sm text-purple-600 font-medium mt-2 mb-6">
            {job.salary}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            {job.description}
          </p>

          <Link
            to="/jobs"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            ← Back to Jobs
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default JobDetails;
