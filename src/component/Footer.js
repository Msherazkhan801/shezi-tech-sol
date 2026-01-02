import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRocket,
  FaPaperPlane,
  FaHeart,
  FaShieldAlt
} from 'react-icons/fa';
import Logo from '../assets/images/Logo2.png';

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscriptionSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubscriptionSuccess(false);
      }, 5000);
    }, 1500);
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook", color: "hover:bg-blue-600", href: "https://www.facebook.com/profile.php?id=61585756147687" },
    { icon: <FaLinkedinIn />, label: "LinkedIn", color: "hover:bg-blue-700", href: "https://linkedin.com" },
    { icon: <FaInstagram />, label: "Instagram", color: "hover:bg-pink-600", href: "https://instagram.com" },
    { icon: <FaYoutube />, label: "YouTube", color: "hover:bg-red-600", href: "https://www.youtube.com/channel/UCjlRubK7n59ujp97X2KXZMw" },
  ];

  const companyLinks = [
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Our Services" },
    { path: "/projects", label: "Our Projects" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact Us" },
  ];

  const serviceLinks = [
    { path: "/services#web", label: "Web Development" },
    { path: "/services#seo", label: "SEO Services" },
    { path: "/services#academic", label: "Academic Writing" },
    { path: "/services#qa", label: "QA & Testing" },
    { path: "/services#consulting", label: "Tech Consulting" },
  ];

  const quickLinks = [
    { path: "/blogs", label: "Blog" },
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/terms", label: "Terms of Service" },
    { path: "/sitemap", label: "Sitemap" },
    { path: "/faq", label: "FAQ" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Bahria Town phase IV, Islamabad,Pakistan " },
    { icon: <FaEnvelope />, text: "shezitechsolution@gmail.com" },
    { icon: <FaPhone />, text: "+92 347 294 3510" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-900/10 to-blue-900/10 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16"
        >
          {/* Logo & About */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link to="/" onClick={scrollToTop} className="block mb-6 group">
              <motion.img
                src={Logo}
                alt="Shezi Tech Solution"
                className="h-20 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Shezi Tech Solution bridges innovation with excellence, delivering cutting-edge 
              digital solutions and academic services that transform ideas into impactful realities.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-400" />
                <span className="text-sm text-gray-300">Secure & Reliable</span>
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <FaHeart className="text-red-400" />
                <span className="text-sm text-gray-300">24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FaRocket className="text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className={`text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group ${
                      location.pathname === link.path ? 'text-blue-400 font-semibold' : ''
                    }`}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={service.path}
                    onClick={scrollToTop}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FaPaperPlane className="text-cyan-400" />
              Stay Updated
            </h4>

            <AnimatePresence mode="wait">
              {subscriptionSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <FaPaperPlane className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="font-semibold text-green-400">Successfully Subscribed!</div>
                      <div className="text-xs text-gray-300">Check your email for confirmation.</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubscription}
                  className="space-y-4"
                >
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg transition-all duration-300 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <FaPaperPlane />
                      )}
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-400">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <span>{info.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center">
              <p className="text-gray-400 text-center text-sm">
                © {new Date().getFullYear()} Shezi Tech Solution. All rights reserved.
              </p>
            
            </div>
          </div>
        </motion.div>

      
      </div>
    </footer>
  );
};

export default Footer;