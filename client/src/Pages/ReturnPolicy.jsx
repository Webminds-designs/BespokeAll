import React, { useEffect } from 'react';
import { motion } from "framer-motion";

const ReturnPolicy = () => {
  useEffect(() => {
    document.title = "Bespoke Furniture | Return & Refund Policy";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-10">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-secondary-100 mb-6">Return & Refund Policy</h1>
        <p className="text-gray-500 mb-6">Last Updated: 2025/03/06</p>
        
        <p className="mb-6 text-gray-700">
          At Artisan Bespoke Furniture, we take pride in crafting custom furniture tailored to your specifications. 
          Due to the personalized nature of our products, please review our return and refund policy carefully.
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">1. Order Cancellation</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Before Production:</span> Orders can be canceled within 48 hours of confirmation for a full refund.</li>
            <li><span className="font-medium">After Production Begins:</span> Cancellations after 48 hours may incur charges for materials and labor already expended.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">2. Returns</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Custom Furniture:</span> As each piece is made to order, we do not accept returns unless the item is defective or deviates from the agreed specifications.</li>
            <li><span className="font-medium">Defective or Incorrect Items:</span> Notify us within 7 days of delivery. We will arrange for repair, replacement, or refund as appropriate.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">3. Refunds</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Eligibility:</span> Refunds are processed for canceled orders (as per the cancellation policy) or defective items.</li>
            <li><span className="font-medium">Process:</span> Approved refunds will be processed within 14 business days to the original payment method.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">4. Shipping Costs</h2>
          <ul className="list-none pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Customer Responsibility:</span> Shipping costs for returns (excluding defective items) are the customer's responsibility.</li>
            <li><span className="font-medium">Defective Items:</span> We cover shipping costs for returning defective or incorrect items.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-secondary-100 mb-3">Contact Us</h2>
          <p className="text-gray-700">
            For return and refund inquiries, please contact <a href="mailto:info@artisanbespokefurniture.com" className="text-secondary-100 hover:underline">info@artisanbespokefurniture.com</a> or <a href="tel:+94777866400" className="text-secondary-100 hover:underline">+94 777 866 400</a>.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default ReturnPolicy;