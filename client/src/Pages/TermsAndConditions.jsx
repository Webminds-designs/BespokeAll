import React, { useEffect } from 'react';
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Bespoke Furniture | Terms & Conditions";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-10">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-secondary-100 mb-6">Terms & Conditions</h1>
        <p className="text-gray-500 mb-6">Last Updated: 2025/03/06</p>
        
        <p className="mb-6 text-gray-700">
          Welcome to Artisan Bespoke Furniture. By accessing our website and services, you agree to the following terms and conditions.
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Custom Orders</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Specifications:</span> Customers must provide accurate specifications for custom furniture.</li>
            <li><span className="font-medium">Lead Time:</span> Estimated production and delivery times will be provided upon order confirmation.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Pricing and Payment</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Quotes:</span> Prices quoted are valid for 30 days.</li>
            <li><span className="font-medium">Payment Terms:</span> A deposit of 50% is required to commence production, with the balance due upon completion.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Delivery</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Shipping:</span> We offer delivery services, with costs and timelines communicated during the order process.</li>
            <li><span className="font-medium">Inspection:</span> Customers should inspect items upon delivery and report any issues within 7 days.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Warranty</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Coverage:</span> We offer a 1-year warranty against manufacturing defects.</li>
            <li><span className="font-medium">Exclusions:</span> Normal wear and tear, misuse, or alterations by the customer are not covered.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Intellectual Property</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Content:</span> All content on our website, including images and text, is our intellectual property.</li>
            <li><span className="font-medium">Use:</span> Unauthorized use or reproduction is prohibited.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Limitation of Liability</h2>
          <p className="text-gray-700">
            We are not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Governing Law</h2>
          <p className="text-gray-700">
            These terms are governed by the laws of Sri Lanka, without regard to its conflict of law principles.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Contact Us</h2>
          <p className="text-gray-700">
            For questions regarding these terms, please contact <a href="mailto:info@artisanbespokefurniture.com" className="text-secondary-100 hover:underline">info@artisanbespokefurniture.com</a> or <a href="tel:+94777866400" className="text-secondary-100 hover:underline">+94 777 866 400</a>.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;