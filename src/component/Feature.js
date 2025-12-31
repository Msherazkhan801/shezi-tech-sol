import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLink, 
  FaBook, 
  FaPlayCircle, 
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <FaCode />,
    title: 'Custom Web Development',
    description: 'Scalable, SEO-friendly, mobile-optimized websites built with modern tech stacks like React and Node.js.',
    color: 'from-blue-500 to-cyan-500',
    subFeatures: ['React/Next.js', 'Node.js', 'Mobile Optimized']
  },
  {
    icon: <FaLink />,
    title: 'High-Authority Link Building',
    description: 'White-hat link-building strategies and backlink audits for sustainable SEO growth and Google rankings.',
    color: 'from-purple-500 to-pink-500',
    subFeatures: ['SEO Strategy', 'Backlink Audit', 'Outreach']
  },
  {
    icon: <FaBook />,
    title: 'Academic & Research Writing',
    description: 'Expert academic content for theses, essays, and technical papers with plagiarism-free guarantees.',
    color: 'from-emerald-500 to-teal-500',
    subFeatures: ['Plagiarism-Free', 'Deep Research', 'Editing']
  },
  {
    icon: <FaCheckCircle />,
    title: 'Software QA & Testing',
    description: 'End-to-end manual and automated testing services for bug-free, high-performance releases.',
    color: 'from-orange-500 to-red-500',
    subFeatures: ['Automated Tests', 'Manual QA', 'Performance']
  },
];

const FeaturesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      scale: 1.05, 
      y: -8,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-start justify-between gap-16"
        >
          {/* Left Text Content */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold uppercase py-2 px-4 rounded-full mb-6 shadow-lg"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Our Features
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Revolutionize Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Online Business
                </span>
                <motion.span
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </span>{' '}
              with Smart Digital Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              From custom websites and SEO to academic support and quality assurance, 
              we empower your digital presence with cutting-edge solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            >
              {[
                { value: '50+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
                { value: '50+', label: 'Experts' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-2xl"
                >
                  <FaPlayCircle />
                </motion.div>
                Watch Introduction Video
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                initial="rest"
                whileHover="hover"
                animate={hoveredIndex === index ? "hover" : "rest"}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  variants={cardVariants}
                  className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-white/20 group-hover:to-white/10 transition-all duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-white/10 group-hover:via-white/5 group-hover:to-transparent"></div>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      variants={iconVariants}
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                    >
                      <div className="text-xl">{feature.icon}</div>
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Sub-features with animation */}
                    <div className="space-y-2 mb-4">
                      {feature.subFeatures.map((sub, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <FaCheckCircle className="text-green-500 text-sm" />
                          <span className="text-sm text-gray-500">{sub}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <Link to ='/contact'>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm font-semibold text-blue-600 mt-4 group-hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    </Link>
                  </div>

                  {/* Floating animation for active card */}
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="hoverBackground"
                      className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaRocket />, title: 'Fast Delivery', desc: 'Quick turnaround times' },
              { icon: <FaShieldAlt />, title: 'Secure', desc: 'Data protection guaranteed' },
              { icon: <FaChartLine />, title: 'Growth Focused', desc: 'Results-driven approach' },
              { icon: <FaCheckCircle />, title: 'Quality Assured', desc: 'Rigorous testing' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center text-white"
              >
                <div className="text-3xl mb-4 text-blue-400">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for Video */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Watch Our Introduction Video"
        >
          <div className="aspect-video w-full">
            <motion.video
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              controls
              autoPlay
              muted
              className="w-full h-full rounded-lg shadow-xl"
              src={require('../assets/video/intro.mp4')}
              type="video/mp4"
            />
          </div>
          <div className="mt-6 text-center text-gray-600">
            <p>Learn how Shezi Tech Solution can transform your digital presence.</p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default FeaturesSection;