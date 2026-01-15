import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from '../component/Project';
import { ProjectsData } from '../utlis/ProjectData';
import {
  FaCode,
  FaSearch,
  FaBook,
  FaFilter,
  FaRocket,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const categories = [
  { key: "all", label: "All Projects", icon: <FaRocket />, count: ProjectsData.length },
  { key: "web", label: "Web Development", icon: <FaCode />, count: ProjectsData.filter(p => p.category === "web").length },
  { key: "seo", label: "SEO & Digital", icon: <FaSearch />, count: ProjectsData.filter(p => p.category === "seo").length },
  { key: "academic", label: "Academic Writing", icon: <FaBook />, count: ProjectsData.filter(p => p.category === "academic").length },
];

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects by category unless "all"
  const filteredProjects = ProjectsData.filter(project => {
    const matchesCategory = activeTab === "all" || project.category === activeTab;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Stats for the active category
  const activeCategoryStats = categories.find(cat => cat.key === activeTab);
  const totalProjects = ProjectsData.length;

  // Animation variants
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

  const tabVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    active: { scale: 1.1 }
  };

  const filterVariants = {
    closed: { opacity: 0, height: 0, y: -20 },
    open: { opacity: 1, height: "auto", y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 mt-12">
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
            Portfolio Showcase
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Projects
              </span>
              <motion.span
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Explore our portfolio of successful projects in web development, SEO, 
            and academic writing. Each project tells a story of innovation and excellence.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold">{totalProjects}+</div>
              <div className="text-sm text-white/70">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm text-white/70">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Project Categories
                </h2>
                <p className="text-gray-600">
                  Filter by service type to see specific projects
                </p>
              </div>

              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                {/* Search Bar */}
                <div className="relative flex-grow lg:w-64">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Filter Toggle (Mobile) */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
                >
                  <FaFilter />
                  Filter
                </motion.button>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {categories.map(({ key, label, icon, count }) => (
                <motion.button
                  key={key}
                  variants={tabVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  animate={activeTab === key ? "active" : "initial"}
                  onClick={() => setActiveTab(key)}
                  className={`relative group flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeTab === key
                      ? "border-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg"
                      : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      activeTab === key 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {icon}
                    </div>
                    <div className="text-left">
                      <div className={`font-bold text-lg ${
                        activeTab === key ? "text-gray-900" : "text-gray-700"
                      }`}>
                        {label}
                      </div>
                      <div className={`text-sm ${
                        activeTab === key ? "text-blue-600" : "text-gray-500"
                      }`}>
                        {count} projects
                      </div>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {activeTab === key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-2xl border-2 border-blue-600"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Filter Drawer */}
            <motion.div
              initial="closed"
              animate={isFilterOpen ? "open" : "closed"}
              variants={filterVariants}
              className="lg:hidden overflow-hidden mb-6"
            >
              <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-lg">
                {categories.map(({ key, label, icon, count }) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveTab(key);
                      setIsFilterOpen(false);
                    }}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                      activeTab === key
                        ? "border-blue-600 bg-gradient-to-r from-blue-50 to-purple-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className={`p-3 rounded-lg mb-2 ${
                      activeTab === key 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                        : "bg-gray-200 text-gray-600"
                    }`}>
                      {icon}
                    </div>
                    <div className="font-semibold text-sm text-center mb-1">{label}</div>
                    <div className="text-xs text-gray-500">{count} projects</div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Active Category Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      <div className="text-white">
                        {categories.find(cat => cat.key === activeTab)?.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {categories.find(cat => cat.key === activeTab)?.label}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Showing {filteredProjects.length} of {activeCategoryStats?.count} projects
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">
                      {activeCategoryStats?.count}
                    </div>
                    <div className="text-sm text-gray-600">Total</div>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">
                      {filteredProjects.length}
                    </div>
                    <div className="text-sm text-gray-600">Showing</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + searchTerm}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-16"
            >
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id || index}
                      variants={itemVariants}
                      custom={index}
                      layout
                      className="group"
                    >
                      {/* Add project type badge */}
                      <div className="relative">
                        {project.category === "web" && (
                          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            <FaCode className="text-xs" />
                            <span>Web Dev</span>
                          </div>
                        )}
                        {project.category === "seo" && (
                          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            <FaSearch className="text-xs" />
                            <span>SEO</span>
                          </div>
                        )}
                        {project.category === "academic" && (
                          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gradient-to-r from-green-600 to-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            <FaBook className="text-xs" />
                            <span>Academic</span>
                          </div>
                        )}
                        
                        {/* Featured badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            <FaStar className="text-xs" />
                            <span>Featured</span>
                          </div>
                        )}
                        
                        {/* Render the ProjectCard */}
                        <ProjectCard {...project} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mb-6">
                    <FaSearch className="text-gray-500 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    No Projects Found
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    We couldn't find any projects matching your search. 
                    Try a different category or search term.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab("all");
                      setSearchTerm("");
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    View All Projects
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Share your vision and 
              we'll bring it to life with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                Start Your Project
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.span>
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;