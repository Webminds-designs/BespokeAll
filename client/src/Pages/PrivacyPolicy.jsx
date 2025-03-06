import React, { useEffect } from 'react';
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Bespoke Furniture | Privacy Policy";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-10">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-secondary-100 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-6">Last Updated: 2025/03/06</p>
        
        <p className="mb-6 text-gray-700">
          Artisan Bespoke Furniture is committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">1. Information We Collect</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">a. Personal Identification Information</h3>
            <ul className="list-none pl-6 text-gray-700 space-y-1">
              <li><span className="font-medium">Contact Details:</span> Name, email address, phone number, and mailing address.</li>
              <li><span className="font-medium">Payment Information:</span> Credit/debit card details and billing information.</li>
              <li><span className="font-medium">Order Specifications:</span> Details related to custom furniture orders, including design preferences and dimensions.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">b. Non-Personal Identification Information</h3>
            <ul className="list-none pl-6 text-gray-700 space-y-1">
              <li><span className="font-medium">Technical Data:</span> IP address, browser type, operating system, and browsing behavior on our site.</li>
              <li><span className="font-medium">Cookies:</span> Small data files stored on your device to enhance user experience and analyze site traffic.</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">2. How We Use Your Information</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Order Fulfillment:</span> To process and deliver custom furniture orders.</li>
            <li><span className="font-medium">Communication:</span> To send order confirmations, updates, and respond to inquiries.</li>
            <li><span className="font-medium">Marketing:</span> To inform you about promotions, new products, or services (you may opt-out at any time).</li>
            <li><span className="font-medium">Improvement:</span> To analyze user behavior and enhance our website and services.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">3. Information Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-3">
            We do not sell or rent your personal information to third parties. We may share information with:
          </p>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Service Providers:</span> Trusted partners who assist in payment processing, delivery, or marketing, bound by confidentiality agreements.</li>
            <li><span className="font-medium">Legal Obligations:</span> Authorities when required by law or to protect our rights.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">4. Data Security</h2>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">5. Your Rights</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Access:</span> Request a copy of your personal data.</li>
            <li><span className="font-medium">Correction:</span> Rectify any inaccurate information.</li>
            <li><span className="font-medium">Deletion:</span> Request deletion of your data, subject to legal obligations.</li>
            <li><span className="font-medium">Opt-Out:</span> Unsubscribe from marketing communications.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">6. Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to external sites. We are not responsible for their privacy practices and encourage you to review their policies.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this policy periodically. Changes will be posted on this page with an updated revision date.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@artisanbespokefurniture.com" className="text-secondary-100 hover:underline">info@artisanbespokefurniture.com</a> or <a href="tel:+94777866400" className="text-secondary-100 hover:underline">+94 777 866 400</a>.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;