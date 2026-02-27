import React from 'react';
import { motion } from 'framer-motion';
import { Home, RefreshCcw, Search } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-2xl w-full text-center relative">
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        {/* The Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Large Animated 404 Text */}
          <motion.h1 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 select-none"
          >
            404
          </motion.h1>

          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
            Even our researchers can't find this!
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            This page is missing—either it’s been moved, or it’s currently undergoing a deep-dive peer review. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <Home size={18} />
              Back to Home
            </button>
          </div>
        </motion.div>

        {/* Small Technical "Footer" for the Error */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400 font-mono"
        >
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System: Functional
          </div>
          <div>Error_Code: PAGE_NOT_IN_THESIS</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;