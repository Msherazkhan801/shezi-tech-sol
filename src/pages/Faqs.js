import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Code, Search, ShieldCheck, Globe, GraduationCap, Zap, FileText, RefreshCw, CreditCard } from 'lucide-react';

const faqData = [
  // --- SECTION: CUSTOM SAAS & TECH ---
  {
    question: "What tech stack do you use for Custom SaaS Development?",
    answer: "We specialize in modern, scalable stacks including React, Next.js, and Node.js. Every project is built with a focus on SEO-friendly architecture and mobile optimization to ensure high performance.",
    icon: <Code className="w-5 h-5 text-purple-600" />
  },
  {
    question: "Do you offer post-launch maintenance and QA?",
    answer: "Yes. We provide end-to-end manual and automated testing services (QA) and ongoing maintenance to ensure your software remains bug-free and scales as your user base grows.",
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />
  },
  {
    question: "Can you help migrate my legacy system to a modern SaaS?",
    answer: "Absolutely. We specialize in digital transformation, helping businesses move from outdated infrastructures to modern, cloud-based SaaS models with minimal downtime.",
    icon: <Zap className="w-5 h-5 text-purple-600" />
  },

  // --- SECTION: ACADEMIC RESEARCH (EUROPE FOCUS) ---
  {
    question: "Do you follow specific UK and European University standards?",
    answer: "Yes. We have extensive experience with UK, German, and broader EU university rubrics. We are experts in various referencing styles including Harvard, APA, MLA, and OSCOLA for Law students.",
    icon: <Globe className="w-5 h-5 text-blue-500" />
  },
  {
    question: "How do you handle Dissertation & PhD Research projects?",
    answer: "We provide end-to-end support for Masters and PhD candidates, covering everything from research proposals and methodology design to data analysis (SPSS/Python) and final synthesis.",
    icon: <GraduationCap className="w-5 h-5 text-blue-500" />
  },
  {
    question: "Is your writing guaranteed to be 100% AI-free?",
    answer: "Strictly. We provide a 'Zero-AI Guarantee.' Every assignment and dissertation is 100% human-written and undergoes rigorous Turnitin and AI-detection scans (like GPTZero) before delivery.",
    icon: <ShieldCheck className="w-5 h-5 text-purple-500" />
  },
  {
    question: "Can you assist with urgent European assignment deadlines?",
    answer: "We offer fast-track support for students facing tight deadlines. Our team can handle urgent assignments within 24–48 hours without compromising on quality or academic integrity.",
    icon: <Zap className="w-5 h-5 text-purple-500" />
  },
  {
    question: "Is my personal and academic data kept confidential?",
    answer: "Privacy is our top priority. We maintain strict NDAs, and your personal information is never shared with third parties or your university. All communications are 100% encrypted.",
    icon: <BookOpen className="w-5 h-5 text-blue-600" />
  },

  // --- SECTION: SEO & DIGITAL GROWTH ---
  {
    question: "How do you ensure 'High-Authority' link building?",
    answer: "We use white-hat strategies involving manual outreach to reputable niche sites. We focus on securing backlinks from domains with high DR (Domain Rating) to boost your Google rankings sustainably.",
    icon: <Search className="w-5 h-5 text-purple-600" />
  },
  {
    question: "Do you provide Content Writing along with SEO?",
    answer: "Yes, we offer SEO-optimized technical writing and blog management. We align our content strategy with your target keywords to drive organic traffic to your SaaS or business site.",
    icon: <FileText className="w-5 h-5 text-blue-500" />
  },

  // --- SECTION: PAYMENTS & PROCESS ---
  {
    question: "How do you handle revisions if I'm not satisfied?",
    answer: "Customer satisfaction is key. We offer unlimited minor revisions for technical projects and specific revision windows for academic work to ensure the final result meets your expectations.",
    icon: <RefreshCw className="w-5 h-5 text-purple-600" />
  },
  {
    question: "What are your payment terms for large projects?",
    answer: "For large-scale SaaS development or full dissertations, we usually work on a milestone-based payment plan. This allows you to pay in installments as specific parts of the project are completed.",
    icon: <CreditCard className="w-5 h-5 text-blue-600" />
  }
];

const FAQItem = ({ question, answer, icon, isOpen, onClick }) => {
  return (
    <div className="mb-4 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-gray-50 rounded-lg">
            {icon}
          </div>
          <span className="text-lg font-semibold text-gray-900">{question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-6 ml-14 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-[#F9FAFB] mt-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-12">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
          </h2>
          <p className="text-gray-600">Got questions? We've got answers about our tech and writing services.</p>
        </div>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}