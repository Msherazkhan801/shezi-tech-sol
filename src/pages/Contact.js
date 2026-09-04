import  { useState } from "react";
import { motion } from "framer-motion";
import contactImage from "../assets/images/contact-image.avif";
import Form from "../component/Forms";
import { 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaUser,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingButtonVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Call To Shezi Tech Solutions",
      info: "+92 347 2943510",
      subInfo: "Mon-Fri 9AM-6PM",
      color: "from-blue-500 to-cyan-500"
    },
    // {
    //   icon: <FaPhone />,
    //   title: "Call Us to Zeeshan Salaar",
    //   info: "+92 300 9081537",
    //   subInfo: "Mon-Fri 9AM-6PM",
    //   color: "from-blue-500 to-cyan-500"
    // },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      info: "shezitechsolution@gmail.com",
      subInfo: "24/7 Support",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Global Services",
      subInfo: "Remote & On-site",
      color: "from-green-500 to-teal-500"
    },

  ];

  return (
    <>
      <section className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden mt-20">
        {/* Floating Background Elements */}
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
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-60"
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
            className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-60"
          />
        </div>

        {/* Left Image Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 w-full h-96 lg:h-auto relative overflow-hidden"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent z-10"></div>
          
          {/* Animated Border Effect */}
          <div className="absolute inset-0 border-8 border-white/20 rounded-xl m-4 z-20"></div>
          
          <motion.img
            src={contactImage}
            alt="Contact Us - Shezi Tech Solutions"
            className="w-full h-full object-cover relative z-0"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Contact Info Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8 right-8 z-30"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaUser className="text-blue-600" />
                Why Choose Us?
              </h3>
              <div className="space-y-3">
                {[
                  "24/7 Customer Support",
                  "Free Initial Consultation",
                  "Secure & Confidential",
                  "Fast Response Time"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Form Side */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 w-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative"
        >
          <div className="w-full max-w-2xl">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                  <FaCheckCircle className="text-white text-4xl" />
                </div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                  Message Sent Successfully!
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  Thank you for reaching out. Our team will contact you within 2 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8"
                >
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold uppercase py-2 px-4 rounded-full mb-4">
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Get In Touch
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Let's Start Your{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Project
                      </span>
                      <motion.span
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </span>
                  </h1>
                  
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and we'll get back to you within hours.
                  </p>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={rightVariants}
                      custom={index}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`bg-gradient-to-br ${item.color} text-white p-4 rounded-xl shadow-lg`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/20 rounded-lg">
                          {item.icon}
                        </div>
                        <div className="text-sm font-semibold">{item.title}</div>
                      </div>
                      <div className="font-bold text-lg">{item.info}</div>
                      <div className="text-sm opacity-90">{item.subInfo}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* WhatsApp Button */}
                <motion.a
                  variants={floatingButtonVariants}
                  initial="initial"
                  animate="animate"
                  href="https://wa.me/923472943510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8 overflow-hidden"
                >
                  <div className="relative">
                    <FaWhatsapp size={24} />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                  </div>
                  <span className="text-lg">Chat Instantly on WhatsApp</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <div className="px-4 text-gray-500 font-medium">Or send a message</div>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Form */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200"
                >
                  <Form phone subscription onSubmitSuccess={() => setFormSubmitted(true)} />
                  
                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Secure & Encrypted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>No Spam Guaranteed</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </section>

      {/* Floating WhatsApp Button (Mobile Only) */}
      <motion.a
        href="https://wa.me/923472943510"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:hidden z-50"
        variants={floatingButtonVariants}
        initial="initial"
        animate="animate"
        whileTap={{ scale: 0.9 }}
      >
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl">
          <FaWhatsapp size={28} />
        </div>
      </motion.a>
    </>
  );
};

export default ContactPage;