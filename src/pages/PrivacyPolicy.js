import { ShieldCheck, Lock, EyeOff, Globe, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Section = ({ title, icon: Icon, children }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-purple-50 rounded-lg">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="text-gray-600 leading-relaxed space-y-4 ml-11">
      {children}
    </div>
  </motion.section>
);

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 mt-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mt-4">
        
        {/* Header Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-10 text-white mt-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-purple-100 italic">Effective Date: February 28, 2026</p>
        </div>

        <div className="p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-10 pb-8 border-b border-gray-100">
            At <strong>Shezi Tech Solution</strong>, we bridge the gap between technical SaaS development and academic excellence. 
            Because we handle sensitive source code and confidential research data, your privacy is our highest priority.
          </p>

          <Section title="Information Collection" icon={Globe}>
            <p>We collect information necessary to provide our services, including:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Contact Data:</strong> Name and email for project communication.</li>
              <li><strong>Project Assets:</strong> Software requirements, source code, or academic drafts.</li>
              <li><strong>Academic Details:</strong> University guidelines and research topics for European dissertation support.</li>
            </ul>
          </Section>

          <Section title="Data Confidentiality" icon={Lock}>
            <p>
              We operate under strict <strong>Non-Disclosure Agreements (NDAs)</strong>. Whether it is a proprietary SaaS algorithm 
              or a Master's thesis for a UK university, your data is never shared with third parties, institutions, or indexing databases.
            </p>
          </Section>

          <Section title="GDPR & European Standards" icon={ShieldCheck}>
            <p>
              For our clients in Europe, we fully comply with **GDPR** regulations. You have the right to request 
              data deletion, rectification, or access at any time. We ensure that academic work is never 
              indexed by search engines to protect your institutional standing.
            </p>
          </Section>

          <Section title="The Zero-AI Policy" icon={EyeOff}>
            <p>
              To maintain academic integrity, we do not use third-party AI tools that store or "learn" from your 
              uploaded research. Your unique insights remain yours alone, protected from plagiarism detectors.
            </p>
          </Section>

          {/* Contact Box */}
          <div className="mt-16 p-8 bg-gray-900 rounded-2xl text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Have questions about your data?</h3>
              <p className="text-gray-400">Our Data Protection Officer is here to help.</p>
            </div>
            <a 
              href="mailto:shezitechsolution@gmail.com" 
              className="px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-purple-50 transition-colors"
            >
              Contact Support
            </a>
          </div>

        </div>
      </div>
      
      <div className="text-center mt-8 text-gray-400 text-sm">
        © 2026 Shezi Tech Solution. All Rights Reserved.
      </div>
    </div>
  );
};

export default PrivacyPolicy;