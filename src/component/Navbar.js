import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo2.png";
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from "react-icons/fi";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBlog,
  FaBriefcase,
  FaPhone,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    {
      path: "/",
      label: "HOME",
      icon: <FaHome />,
      exact: true,
    },
    {
      path: "/about",
      label: "ABOUT US",
      icon: <FaUser />,
    },
    {
      path: "/services",
      label: "SERVICES",
      icon: <FaCode />,
      dropdown: [
        { path: "/services#web", label: "Web Development", icon: <FaCode /> },
        { path: "/services#seo", label: "SEO Services", icon: <FaChartLine /> },
        {
          path: "/services#academic",
          label: "Academic Writing",
          icon: <FaGraduationCap />,
        },
      ],
    },
    {
      path: "/blogs",
      label: "BLOG",
      icon: <FaBlog />,
    },
    {
      path: "/career",
      label: "CAREER",
      icon: <FaBriefcase />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <FaBriefcase />,
    },
  ];

  const desktopContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const desktopItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const dropdownItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-white/90 backdrop-blur-sm shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.img
                src={Logo}
                alt="Shezi Tech Solution"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-14" : "h-16"
                } w-auto`}
                whileHover={{ scale: 1.05 }}
              />
              {!isScrolled && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden lg:block"
                >
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Shezi Tech Solution
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
                </motion.div>
              )}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={desktopContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center space-x-1"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                variants={desktopItemVariants}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.path)
                }
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group ${
                    (
                      item.exact
                        ? location.pathname === item.path
                        : location.pathname.startsWith(item.path)
                    )
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`transition-colors ${
                      (
                        item.exact
                          ? location.pathname === item.path
                          : location.pathname.startsWith(item.path)
                      )
                        ? "text-blue-600"
                        : "text-gray-500 group-hover:text-blue-600"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                  {item.dropdown && (
                    <FiChevronDown
                      className={`ml-1 transition-transform duration-300 ${
                        activeDropdown === item.path ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* Active indicator */}
                  {(item.exact
                    ? location.pathname === item.path
                    : location.pathname.startsWith(item.path)) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.path && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem) => (
                            <motion.div
                              key={dropdownItem.path}
                              variants={dropdownItemVariants}
                            >
                              <Link
                                to={dropdownItem.path}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                              >
                                <span className="text-blue-500 group-hover:text-blue-600">
                                  {dropdownItem.icon}
                                </span>
                                <span className="font-medium">
                                  {dropdownItem.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <motion.div
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className="absolute w-6 h-0.5 bg-gray-700 rounded-full"
              />
              <motion.div
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-6 h-0.5 bg-gray-700 rounded-full top-2"
              />
              <motion.div
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                className="absolute w-6 h-0.5 bg-gray-700 rounded-full bottom-0"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-white border-t border-gray-200 shadow-xl mt-2 rounded-xl overflow-hidden"
            >
              <div className="py-4 px-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={mobileItemVariants}
                    className="mb-1"
                  >
                    <div className="relative">
                      <Link
                        to={item.dropdown ? "#" : item.path}
                        onClick={(e) => {
                          if (item.dropdown) {
                            e.preventDefault();
                            setActiveDropdown(
                              activeDropdown === item.path ? null : item.path
                            );
                          }
                        }}
                        className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`${
                              location.pathname === item.path
                                ? "text-blue-600"
                                : "text-gray-500"
                            }`}
                          >
                            {item.icon}
                          </span>
                          <span className="font-semibold">{item.label}</span>
                        </div>
                        {item.dropdown && (
                          <motion.div
                            animate={{
                              rotate: activeDropdown === item.path ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiChevronDown />
                          </motion.div>
                        )}
                      </Link>

                      {/* Mobile Dropdown */}
                      {item.dropdown && (
                        <AnimatePresence>
                          {activeDropdown === item.path && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="ml-8 mt-1"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <motion.div
                                  key={dropdownItem.path}
                                  variants={dropdownItemVariants}
                                >
                                  <Link
                                    to={dropdownItem.path}
                                    className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                  >
                                    <span className="text-blue-500">
                                      {dropdownItem.icon}
                                    </span>
                                    <span className="font-medium">
                                      {dropdownItem.label}
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                <motion.div variants={mobileItemVariants} className="mt-6">
                  <Link
                    to={"/contact"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      GET In Touch
                      <FiArrowRight className="animate-pulse" />
                    </span>
                  </Link>

                  {/* Contact Info */}
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX:
            window.scrollY / (document.body.scrollHeight - window.innerHeight),
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
};

export default Navbar;
