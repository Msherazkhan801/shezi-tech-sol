import React from 'react';
import { Scale, FileText, AlertCircle, Ban, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermSection = ({ title, icon: Icon, children }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-10 p-6 border-l-4 border-blue-500 bg-gray-50 rounded-r-2xl"
  >
    <div className="flex items-center gap-3 mb-3">
      <Icon className="w-6 h-6 text-blue-600" />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <div className="text-gray-600 space-y-3 ml-9">
      {children}
    </div>
  </motion.div>
);

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
            <Scale className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">Terms of Service</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Please read these terms carefully before using Shezi Tech Solution services. 
            By hiring us, you agree to these legal conditions.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          
          <TermSection title="1. Service Agreement" icon={FileText}>
            <p>Shezi Tech Solution provides Custom SaaS Development, SEO services, and Academic Research Support. A project is considered "active" once the initial deposit or milestone payment is confirmed.</p>
          </TermSection>

          <TermSection title="2. Intellectual Property (SaaS)" icon={CheckCircle}>
            <p>For technical projects, full ownership of the source code is transferred to the client only upon **final payment**. We reserve the right to showcase non-confidential UI elements in our portfolio unless an NDA states otherwise.</p>
          </TermSection>

          <TermSection title="3. Academic Fair Use Policy (Europe)" icon={AlertCircle}>
            <p className="font-semibold text-gray-800">Crucial for Students:</p>
            <p>Our academic writing and dissertation services are intended as **research models and reference materials**. Shezi Tech Solution is not responsible for any institutional consequences resulting from the submission of our work as a student's own. We encourage students to use our work to guide their own original research.</p>
          </TermSection>

          <TermSection title="4. Revisions & Feedback" icon={Scale}>
            <p>We offer up to **3 rounds of revisions** for technical projects and assignments within 14 days of delivery. Revisions must align with the original project brief. New requirements outside the initial scope will be billed separately.</p>
          </TermSection>

          <TermSection title="5. Prohibited Conduct" icon={Ban}>
            <ul className="list-disc space-y-2">
              <li>Users may not use our developed software for illegal activities.</li>
              <li>Users may not attempt to reverse-engineer our proprietary internal tools.</li>
              <li>Chargebacks without prior communication will result in immediate termination of service and blacklisting.</li>
            </ul>
          </TermSection>

          <TermSection title="6. Limitation of Liability" icon={AlertCircle}>
            <p>Shezi Tech Solution shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our software or research materials. Our total liability is limited to the amount paid for the specific service in question.</p>
          </TermSection>

        </div>

        {/* Final Acceptance Footer */}
        <div className="mt-16 p-10 bg-blue-600 rounded-3xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            By clicking "Order Now" or signing a project proposal, you acknowledge that you have read and understood these terms.
          </p>
          <Link to="/">
          <button 
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white text-blue-600 px-10 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
          >
            I Understand
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;