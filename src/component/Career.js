import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ApplyForm from "./ApplyForm";
import {
  FaRocket,
  FaUsers,
  FaHeart,
  FaArrowRight,
  FaGraduationCap,
  FaSearch,
  FaCode,
  FaChartLine,
  FaBook,
  FaCheckCircle,
  FaGlobe,
  FaCalendarAlt,
  FaDollarSign,
  FaLightbulb,
  FaHandshake,
  FaStar
} from "react-icons/fa";

const jobOpenings = [
  // {
  //   id: 1,
  //   title: "Frontend Developer",
  //   location: "Remote",
  //   type: "Full-time",
  //   category: "tech",
  //   description: "Build and maintain responsive web applications using React, Next.js and Tailwind CSS.",
  //   requirements: ["3+ years React", "TypeScript", "CSS/SCSS"],
  //   salary: "$60k - $90k",
  //   experience: "3+ years",
  //   featured: true
  // },
  // {
  //   id: 2,
  //   title: "Backend Developer",
  //   location: "Remote",
  //   type: "Full-time",
  //   category: "tech",
  //   description: "Develop robust APIs and microservices using Node.js, Python and MongoDB.",
  //   requirements: ["Node.js/Express", "Python/Django", "Database Design"],
  //   salary: "$70k - $100k",
  //   experience: "4+ years"
  // },
  // {
  //   id: 3,
  //   title: "QA Engineer",
  //   location: "Remote",
  //   type: "Contract",
  //   category: "tech",
  //   description: "Test web applications and automate test cases for quality assurance.",
  //   requirements: ["Automated Testing", "Selenium/Cypress", "API Testing"],
  //   salary: "$50k - $80k",
  //   experience: "2+ years"
  // },
  // {
  //   id: 4,
  //   title: "SEO Expert",
  //   location: "Remote",
  //   type: "Full-time",
  //   category: "marketing",
  //   description: "Optimize websites for search engines and implement SEO strategies.",
  //   requirements: ["Google Analytics", "Keyword Research", "Link Building"],
  //   salary: "$45k - $75k",
  //   experience: "2+ years"
  // },
  {
    id: 5,
    title: "Academic Writer",
    location: "Remote",
    type: "Contract",
    category: "academic",
    description: "Create high-quality academic content, research papers, and technical documentation.",
    requirements: ["PhD/Masters", "Research Skills", "English Proficiency",'BBA/MBA ','Software Engineering'],
    salary: "Project-based",
    experience: "1+ years",
    featured: true
  },
  {
    id: 6,
    title: "Academic Writer",
    location: "Remote",
    type: "Full-time",
    category: "academic",
    description: "Develop content strategies for tech blogs, SaaS products, and academic resources.",
    requirements: ["English Proficiency",'BBA/MBA ','Software Engineering', "SEO Writing",'Data Science' ],
    salary: "20k-40k",
    experience: "3 months / Fresh Graduate"
  }
];

const benefits = [
  { icon: <FaGlobe />, title: "Remote Work", desc: "Work from anywhere in the world" },
  { icon: <FaDollarSign />, title: "Competitive Pay", desc: "Industry-standard salaries" },
  { icon: <FaCalendarAlt />, title: "Flexible Hours", desc: "Work-life balance focus" },
  { icon: <FaHeart />, title: "Health Benefits", desc: "Medical & wellness programs" },
  { icon: <FaGraduationCap />, title: "Learning Budget", desc: "Courses & certifications" },
  { icon: <FaStar />, title: "Growth Opportunities", desc: "Career advancement paths" },
];

const categories = [
  { key: "all", label: "All Roles", icon: <FaUsers /> },
  { key: "tech", label: "Tech & Dev", icon: <FaCode /> },
  { key: "marketing", label: "Marketing", icon: <FaChartLine /> },
  { key: "academic", label: "Academic", icon: <FaBook /> },
];

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredJob, setHoveredJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  const filteredJobs = activeCategory === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-24 px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-bold uppercase py-3 px-6 rounded-full mb-6 border border-white/20"
          >
            <FaRocket className="text-lg" />
            Join Our Growing Team
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Build Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Career
              </span>
              <motion.span
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
            </span>{" "}
            With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            At Shezi Tech Solution, we're passionate about building innovative technology products 
            and academic solutions. Join our remote-friendly team and grow with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {[
              { value: jobOpenings.length, label: "Open Positions" },
              { value: "100%", label: "Remote" },
              { value: "Global", label: "Team" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
         

          {/* Job Openings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Current{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Openings
                  </span>
                </h2>
                <p className="text-gray-600">
                  Browse our available positions and find your perfect match
                </p>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category.key
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category.icon}
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Jobs Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredJobs.map((job, index) => (
                <motion.article
                  key={job.id}
                  variants={itemVariants}
                  custom={index}
                  initial="rest"
                  whileHover="hover"
                  animate={hoveredJob === job.id ? "hover" : "rest"}
                  onMouseEnter={() => setHoveredJob(job.id)}
                  onMouseLeave={() => setHoveredJob(null)}
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  {/* Featured badge */}
                  {job.featured && (
                    <div className="absolute top-2 right-4 z-10">
                      <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        <FaStar className="text-xs" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  <motion.div
                    variants={cardVariants}
                    className="p-8"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <FaGlobe className="text-sm" />
                            {job.location}
                          </span>
                         
                          {job.salary && (
                            <span className="flex items-center gap-1">
                              <FaDollarSign className="text-sm" />
                              {job.salary}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-bold text-gray-900">{job.experience}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Requirements */}
                    {job.requirements && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                            >
                              <FaCheckCircle className="text-green-500 text-xs" />
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        Category: <span className="font-semibold text-gray-700 capitalize">{job.category}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal(job)}
                        className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        Apply Now
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Hover effect background */}
                  {hoveredJob === job.id && (
                    <motion.div
                      layoutId="jobHover"
                      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl -z-10"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </motion.article>
              ))}
            </motion.div>

            {/* No Jobs Found */}
            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mb-6">
                  <FaSearch className="text-gray-500 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No Open Positions Found
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  There are no current openings in this category. 
                  Please check back later or apply for general consideration.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    openModal({ title: "General Application" });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  Submit General Application
                </button>
              </motion.div>
            )}
          </motion.div>

 {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Work With{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shezi Tech?
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We believe in creating an environment where talented people can thrive and grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <div className="text-2xl text-blue-600 group-hover:text-blue-700">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                  
                  {/* Hover effect line */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Culture & Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Culture
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We foster a culture of innovation, collaboration, and continuous learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaLightbulb />,
                  title: "Innovation First",
                  desc: "We encourage creative thinking and experimentation to solve complex problems"
                },
                {
                  icon: <FaHandshake />,
                  title: "Collaborative Spirit",
                  desc: "Teamwork makes the dream work - we believe in working together towards common goals"
                },
                {
                  icon: <FaGraduationCap />,
                  title: "Continuous Growth",
                  desc: "We invest in our team's development through training, mentorship, and new challenges"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
                    <div className="text-3xl text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* General Application CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">
              Don't See Your Dream Role?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and 
              we'll contact you when a suitable position opens up.
            </p>
            <button
              onClick={() => openModal({ title: "General Application" })}
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center justify-center gap-3 mx-auto"
            >
              Submit General Application
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Apply for {selectedJob?.title}
                    </h2>
                    {selectedJob?.location && (
                      <p className="text-gray-600 mt-2">
                        {selectedJob.location} • {selectedJob.type}
                      </p>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl p-2"
                    aria-label="Close modal"
                  >
                    ✕
                  </motion.button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {selectedJob?.description && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Job Description</h3>
                    <p className="text-gray-600">{selectedJob.description}</p>
                  </div>
                )}

                {selectedJob?.requirements && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Application Form</h3>
                  <p className="text-gray-600 mb-4">
                    Please fill out the form below. We'll review your application and 
                    contact you within 3-5 business days.
                  </p>
                  <ApplyForm
                    lookingFor={true}
                    resume={true}
                    phone={true}
                    jobTitle={selectedJob?.title}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;